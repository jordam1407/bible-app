import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => (
    <Svg width={64} height={64} viewBox="0 0 64 64" {...props}>
        <Path fill="#ec1c24" d="M26 17.76v3.38h37.965c-.053-1.09-.167-2.468-.575-3.38" />
        <Path fill="#e6e7e8" d="M61.6 14.38H26v3.38h37.39c-.406-1.261-1.01-2.411-1.79-3.38" />
        <Path fill="#ec1c24" d="M54 11H26v3.38h35.6C59.931 12.29 57.184 11 54 11" />
        <Path
            fill="#e6e7e8"
            d="M63.965 21.14H26v3.38h38v-2.253c0-.201-.013-.397-.019-.594-.004-.054-.01-.193-.016-.533"
        />
        <Path fill="#ec1c24" d="M26 27.9h38v-3.38H26z" />
        <Path fill="#e6e7e8" d="M26 31.28h38V27.9H26v3.38" />
        <Path fill="#ec1c24" d="M26 31.28h38v3.38H26z" />
        <Path fill="#e6e7e8" d="M0 34.66v3.38h64v-3.38H26z" />
        <Path fill="#ec1c24" d="M0 38.04h64v3.38H0z" />
        <Path fill="#e6e7e8" d="M.005 43.499s-.009.819.015 1.301h63.96c.028-.494.015-1.301.015-1.301L64 41.42H0z" />
        <Path fill="#ec1c24" d="M10 55h44c3.193 0 5.847-1.16 7.66-3.44H2.33C4.202 53.89 6.906 55 9.995 55" />
        <Path fill="#e6e7e8" d="M2.335 51.56h59.33a9.993 9.993 0 0 0 1.74-3.38H.605a10.363 10.363 0 0 0 1.735 3.38" />
        <Path fill="#ec1c24" d="M.6 48.18h62.8a14.38 14.38 0 0 0 .58-3.38H.02c.099 1.156.191 2.029.58 3.38" />
        <Path fill="#176496" d="M26 11H10C3.373 11 0 15.925 0 22v12.66h26z" />
        <Path
            fill="#fff"
            d="m2.798 16.976.544-.418.543.418-.211-.672.541-.411h-.668l-.207-.675-.206.675h-.667l.543.411zm3.594 0 .544-.418.543.418-.21-.672.54-.411h-.667l-.207-.675-.206.675H6.06l.543.411zm3.965 0 .543-.418.544.418-.211-.672.54-.411h-.663l-.21-.675-.207.675h-.663l.537.411zm3.936 0 .543-.418.544.418-.21-.672.54-.411h-.67l-.204-.675-.206.675h-.668l.542.411zm3.95 0 .544-.418.543.418-.21-.672.541-.411h-.669l-.206-.675-.206.675h-.667l.54.411zM4.711 18.731l.543-.417.543.417-.209-.671.54-.411H5.46l-.207-.674-.203.674h-.67l.541.411zm3.595 0 .543-.417.543.417-.21-.671.54-.411H9.05l-.201-.674-.207.674h-.667l.541.411zm3.965 0 .542-.417.543.417-.21-.671.541-.411h-.667l-.207-.674-.207.674h-.668l.541.411zm3.934 0 .544-.417.544.417-.213-.671.542-.411h-.667l-.207-.674-.205.674h-.668l.541.411zm3.955 0 .539-.417.543.417-.212-.671.542-.411h-.666l-.208-.674-.205.674h-.668l.541.411zm2.227-1.755.543-.418.544.418-.211-.672.54-.411h-.663l-.211-.675-.206.675h-.673l.547.411zM2.745 31.02l.544-.413.543.413-.21-.666.54-.412-.667.002-.208-.674-.204.674-.669-.002.541.412zm3.595 0 .543-.413.544.413-.211-.666.54-.412-.666.002-.208-.674-.205.674-.667-.002.54.412zm3.965 0 .543-.413.544.413-.211-.666.54-.412-.671.002-.203-.674-.206.674-.667-.002.541.412zm3.936 0 .543-.413.543.413-.207-.666.537-.412-.668.002-.206-.674-.206.674-.667-.002.54.412zm3.949 0 .544-.413.544.413-.208-.666.537-.412-.667.002-.207-.674-.205.674-.668-.002.54.412zm4.144 0 .543-.413.544.413-.211-.666.541-.412-.671.002-.204-.674-.206.674-.67-.002.544.412zM2.798 20.488l.544-.418.543.418-.211-.672.541-.411-.668.002-.207-.676-.206.676-.667-.002.543.411zm3.594 0 .544-.418.543.418-.21-.672.54-.411-.667.002-.207-.676-.206.676-.669-.002.543.411zm3.965 0 .543-.418.544.418-.211-.672.54-.411-.663.002-.21-.676-.207.676-.663-.002.537.411zm3.936 0 .543-.418.544.418-.21-.672.54-.411-.67.002-.204-.676-.206.676-.668-.002.542.411zm3.95 0 .544-.418.543.418-.21-.672.541-.411-.669.002-.206-.676-.206.676-.667-.002.54.411zM4.711 22.244l.543-.417.543.417-.209-.671.54-.413H5.46l-.207-.672-.203.672h-.67l.541.413zm3.595 0 .543-.417.543.417-.21-.671.54-.413H9.05l-.201-.672-.207.672h-.667l.541.413zm3.965 0 .542-.417.543.417-.21-.671.541-.413h-.667l-.207-.672-.207.672h-.668l.541.413zm3.934 0 .544-.417.544.417-.213-.671.542-.413h-.667l-.207-.672-.205.672h-.668l.541.413zm3.955 0 .539-.417.543.417-.212-.671.542-.413h-.666l-.208-.672-.205.672h-.668l.541.413zm2.227-1.756.543-.418.544.418-.211-.672.54-.411-.663.002-.211-.676-.206.676-.673-.002.547.411zM2.745 24l.544-.417.543.417-.211-.67.541-.412-.668.002-.207-.676-.204.676-.669-.002.541.412zm3.595 0 .543-.417.544.417-.211-.67.54-.412-.666.002-.208-.676-.205.676-.667-.002.539.412zm3.965 0 .543-.417.543.417-.21-.67.54-.412-.671.002-.203-.676-.206.676-.667-.002.541.412zm3.936 0 .542-.417.544.417-.207-.67.537-.412-.668.002-.206-.676-.206.676-.667-.002.54.412zm3.949 0 .544-.417.543.417-.207-.67.537-.412-.668.002-.206-.676-.205.676-.668-.002.54.412zM4.658 25.756l.543-.416.543.416-.209-.666.539-.414h-.668L5.2 24l-.205.676h-.668l.541.414zm3.595 0 .543-.416.543.416-.21-.666.54-.414H9L8.795 24l-.206.676h-.668l.542.414zm3.966 0 .541-.416.544.416-.214-.666.544-.414h-.667L12.76 24l-.206.676h-.668l.541.414zm3.931 0 .546-.416.544.416-.21-.666.539-.414h-.667L16.695 24l-.205.676h-.668l.541.414zm3.95 0 .546-.416.544.416-.211-.666.542-.414h-.667L20.646 24l-.206.676h-.668l.541.414zM22.334 24l.543-.417.543.417-.21-.67.541-.412-.671.002-.204-.676-.206.676-.67-.002.544.412zM2.745 27.513l.544-.413.543.413-.211-.671.541-.412-.668.002-.207-.676-.204.676-.669-.002.541.412zm3.595 0 .543-.413.544.413-.211-.671.54-.412-.666.002-.208-.676-.205.676-.667-.002.539.412zm3.965 0 .543-.413.543.413-.21-.671.54-.412-.671.002-.203-.676-.206.676-.667-.002.541.412zm3.936 0 .542-.413.544.413-.207-.671.537-.412-.668.002-.206-.676-.206.676-.667-.002.54.412zm3.949 0 .544-.413.543.413-.207-.671.537-.412-.668.002-.206-.676-.205.676-.668-.002.54.412zM4.658 29.27l.543-.418.543.418-.209-.672.539-.408h-.668l-.206-.677-.205.677h-.668l.541.408zm3.595 0 .543-.418.543.418-.21-.672.54-.408H9l-.205-.677-.206.677h-.668l.542.408zm3.966 0 .541-.418.544.418-.214-.672.544-.408h-.667l-.207-.677-.206.677h-.668l.541.408zm3.931 0 .546-.418.544.418-.21-.672.539-.408h-.667l-.207-.677-.205.677h-.668l.541.408zm3.95 0 .546-.418.544.418-.211-.672.542-.408h-.667l-.208-.677-.206.677h-.668l.541.408zm2.234-1.757.543-.413.543.413-.21-.671.541-.412-.671.002-.204-.676-.206.676-.67-.002.544.412z"
        />
    </Svg>
)
export default SvgComponent