import type { SvgLeftRigthProps } from "../../Types/SvgComponent";

export default function RightSVG({ size, color, className, onClick}: SvgLeftRigthProps) {

    return (
        <button onClick={onClick}>
        <svg className={className} width={size ?? 25} height={size ?? 25} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.366646 12.2558L1.49912 13.4L7.83331 7.00002L1.49912 0.600024L0.366645 1.74427L5.56836 7.00002L0.366646 12.2558Z" fill={color ?? "black"} />
        </svg>
        </button>
    )
}
