import type { ReactNode } from 'react';
import './style.scss'

type ButtonProps = {
    children?: ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props:ButtonProps){
    return <button onClick={props.onClick} className='button'>{props.children}</button>
}

export function ButtonComprar(props:ButtonProps){
    return <button onClick={props.onClick} className='button-comprar'>{props.children}</button>
}