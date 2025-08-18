import type { ColorProps } from "./ColorType"

export type SvgProps = {
    size?: number,
    color?: ColorProps,
}

export type SvgLeftRigthProps = {
    size?: number,
    color?: ColorProps,
    className?: string,
    onClick?:() => void
}

export type SvgSize = number;