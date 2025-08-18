import type { SvgLeftRigthProps } from "../../Types/SvgComponent";

export default function LeftSVG({ size, color, className, onClick }: SvgLeftRigthProps) {

    return (
        <button onClick={onClick}>
        <svg className={className} width={size ?? 25} height={size ?? 25} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63341 1.74422L6.50094 0.599976L0.166748 6.99998L6.50094 13.4L7.63341 12.2557L2.4317 6.99998L7.63341 1.74422Z" fill={color ?? "black"} />
        </svg>
        </button>
    )
}