import Phone from '../../Assets/imgs/phone.png';
import { useModal } from '../../Context/ModalProvider';
import { ButtonComprar } from '../Button';
import CardModal from '../CardModal';
import './style.scss';

export type CardProps = {
    nameProduct: string,
    photo?: string,
    price: number
}

export default function Card(props: CardProps) {
    const btn = "comprar";
    const {openModal} = useModal();

    const juros = 8;
    const desconto = 20;


    return (

        <div className='card'>
            {props.photo? 
            <img src={Phone} alt="smartphone" /> : <span>loading</span>}
            <div className='box'>
                <span className='nome-produto'>{props.nameProduct}</span>
                <span className='preco'>
                    <p className='full'>{props.price?`R$ ${props.price},00`:"Erro ao recuperar preço"}</p>
                    <p className='off'>{props.price?`R$ ${(props.price / 100) * (100 - desconto)},00`:"Erro ao recuperar preço"}</p>
                    <p className='juros'>ou {juros}x de R$ {props.price / juros} sem juros</p>
                </span>
                <a href='/#' className='frete'>Frete grátis</a>
                <ButtonComprar onClick={() => {
                    openModal(<CardModal/>)
                }}>{btn.toLocaleUpperCase()}</ButtonComprar>
            </div>
        </div>
    )
}