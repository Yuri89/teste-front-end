import Modal from "../Components/Modal";
import { ModalProvider } from "../Context/ModalProvider";
import Pagina from "../Pages/Pagina";
import '../Styles/Global.scss'
import './style.scss'

export default function(){
    return(
        <div className="layout">
            <ModalProvider>
            <Pagina/>
            <Modal/>
            </ModalProvider>
        </div>
    )
}