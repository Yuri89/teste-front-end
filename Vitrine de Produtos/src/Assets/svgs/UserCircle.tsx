import type { SvgProps } from "../../Types/SvgComponent";

export default function UserCircleSVG({ size, color }: SvgProps) {

    return (
        <svg width={size ?? 25} height={size ?? 25} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.9375 0.0625V31.9375H0.0625V0.0625H31.9375Z" stroke={color ?? "black"} stroke-width="0.125"/>
<path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke={color ?? "black"} stroke-width="2" stroke-miterlimit="10"/>
<path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke={color ?? "black"} stroke-width="2" stroke-miterlimit="10"/>
<path d="M7.97491 24.9218C8.72818 23.4408 9.87656 22.1971 11.2929 21.3284C12.7093 20.4598 14.3385 20 16 20C17.6616 20 19.2907 20.4598 20.7071 21.3284C22.1235 22.1971 23.2719 23.4407 24.0251 24.9217" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)
}
