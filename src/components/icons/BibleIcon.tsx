import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const BibleIcon = (props: SvgProps) => (
    <Svg width={64} height={64} viewBox="0 0 48 48" {...props}>
        <Path
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2m4.33-2v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z"
        />
        <Path
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M24.06 14.444v4.213h-4.213v4.213h4.213v8.676h4.211V22.87h4.213v-4.213H28.27v-4.213Z"
        />
    </Svg>
)
export default BibleIcon
