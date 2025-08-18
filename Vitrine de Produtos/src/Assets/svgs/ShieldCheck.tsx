import type { SvgProps } from "../../Types/SvgComponent";

export default function ShildCheckSVG({ size, color }: SvgProps) {

    return (
        <svg width={size ?? 25} height={size ?? 25} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9375 0.0625V19.9375H0.0625V0.0625H19.9375Z" stroke={color ?? "black"} stroke-width="0.125" />
            <path d="M3.125 8.95833V4.375C3.125 4.20924 3.19085 4.05027 3.30806 3.93306C3.42527 3.81585 3.58424 3.75 3.75 3.75H16.25C16.4158 3.75 16.5747 3.81585 16.6919 3.93306C16.8092 4.05027 16.875 4.20924 16.875 4.375V8.95833C16.875 15.522 11.3042 17.6966 10.1919 18.0654C10.0675 18.1082 9.93246 18.1082 9.80811 18.0654C8.69578 17.6966 3.125 15.522 3.125 8.95833Z" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.4375 8.125L8.85414 12.5L6.5625 10.3125" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

