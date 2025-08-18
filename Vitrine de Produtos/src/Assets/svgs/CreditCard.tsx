import type { SvgProps } from "../../Types/SvgComponent";

export default function CreditCardSVG({ size, color }: SvgProps) {

    return (
        <svg width={size ?? 25} height={size ?? 25} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9375 0.0625V19.9375H0.0625V0.0625H19.9375Z" stroke={color ?? "black"} stroke-width="0.125" />
            <path d="M17.5 4.375H2.5C2.15482 4.375 1.875 4.65482 1.875 5V15C1.875 15.3452 2.15482 15.625 2.5 15.625H17.5C17.8452 15.625 18.125 15.3452 18.125 15V5C18.125 4.65482 17.8452 4.375 17.5 4.375Z" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.1245 13.125H15.6245" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.37451 13.125H10.6245" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.87451 7.56665H18.1245" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
