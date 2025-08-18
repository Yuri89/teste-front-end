import { useModal } from '../../Context/ModalProvider'
import './style.scss'
export default function Modal(){

    const {isOpen, component, closeModal} = useModal();

    return(
        <div className={`modal ${isOpen? 'open': 'close'}`}>
            <div className='component'>{component}</div>
        </div>
    )
}