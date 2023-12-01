import dayjs from 'dayjs'
import i18n from 'i18next'
import numeral from 'numeral'
import { initReactI18next } from 'react-i18next'

import { formatPhoneNumber } from '../helpers/format.utils'
import enUSResource from './en-US'
import esResource from './es'
import ptBRResource from './pt-BR'

numeral.locale('en-us')

export const defaultNS = ['common']
export const resources = {
    enUS: { ...enUSResource },
    ptBR: { ...ptBRResource },
    es: { ...esResource },
} as const

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng: 'ptBR',
    lng: 'ptBR',
    resources,
    ns: Object.keys(enUSResource),
    defaultNS,
    interpolation: {
        escapeValue: false,
        format(value, format) {
            if (value instanceof Date) return value ? dayjs(value).format(format) : 'Invalid Date'
            if (typeof value === `number`) return numeral(value).format(format)
            if (typeof value === `string` && format === 'phone') return formatPhoneNumber(value)
            return value
        },
    },
})

export default i18n
