import 'i18next'
import { defaultNS, resources } from '@src/common/i18n/index'

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS
        resources: (typeof resources)['enUS']
    }
}
