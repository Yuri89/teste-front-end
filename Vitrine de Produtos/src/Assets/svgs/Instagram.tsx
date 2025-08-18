import type { SvgProps } from "../../Types/SvgComponent";

export default function InstagramSVG({ size, color }: SvgProps) {

    return (
        <svg width={size ?? 25} height={size ?? 25} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 1.5H6.5C3.73858 1.5 1.5 3.73858 1.5 6.5V16.5C1.5 19.2614 3.73858 21.5 6.5 21.5H16.5C19.2614 21.5 21.5 19.2614 21.5 16.5V6.5C21.5 3.73858 19.2614 1.5 16.5 1.5Z" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.5 10.8701C15.6234 11.7023 15.4812 12.5523 15.0937 13.2991C14.7062 14.0459 14.0931 14.6515 13.3416 15.0297C12.5901 15.408 11.7384 15.5397 10.9077 15.406C10.0771 15.2723 9.30971 14.8801 8.71479 14.2852C8.11987 13.6903 7.72768 12.9229 7.59402 12.0923C7.46035 11.2616 7.59202 10.41 7.97028 9.65843C8.34854 8.90691 8.95414 8.2938 9.70094 7.9063C10.4477 7.5188 11.2977 7.37665 12.13 7.50006C12.9789 7.62594 13.7648 8.02152 14.3716 8.62836C14.9785 9.23521 15.3741 10.0211 15.5 10.8701Z" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 6H17.01" stroke={color ?? "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
