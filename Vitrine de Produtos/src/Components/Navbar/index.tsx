import BoxSendSVG from "../../Assets/svgs/boxsend";
import CreditCardSVG from "../../Assets/svgs/CreditCard";
import CrownSVG from "../../Assets/svgs/Crown";
import HeartSVG from "../../Assets/svgs/Heart";
import Logo from "../../Assets/svgs/Logo";
import LupaSVG from "../../Assets/svgs/Lupa";
import ShildCheckSVG from "../../Assets/svgs/ShieldCheck";
import ShoppingCartSVG from "../../Assets/svgs/ShoppingCart";
import TruckSVG from "../../Assets/svgs/Truck";
import UserCircleSVG from "../../Assets/svgs/UserCircle";
import './style.scss'

export default function Navbar() {

    return (
        <header className="header">
            <div>
                <div><ShildCheckSVG size={20} color="#9F9F9F" /> <span>Compra <strong> 100% segura </strong></span></div>
                <div><TruckSVG size={20} color="#9F9F9F" /> <span> <strong>Frete grátis </strong> acima de R$ 200</span></div>
                <div><CreditCardSVG size={20} color="#9F9F9F" /> <span><strong>Parcele </strong> suas compras</span></div>
            </div>
            <div>
                <Logo size={42} />
                <label htmlFor="">
                    <input type="text" placeholder="O que você está buscando?" />
                    <LupaSVG />
                </label>
                <nav>
                    <ul>
                        <li><a href=""><BoxSendSVG color="#9F9F9F" size={32} /></a></li>
                        <li><a href=""><HeartSVG color="#9F9F9F" size={32} /></a></li>
                        <li><a href=""><UserCircleSVG color="#9F9F9F" size={32} /></a></li>
                        <li><a href=""><ShoppingCartSVG color="#9F9F9F" size={32} /></a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="">Todas Categorias</a></li>
                        <li><a href="">Supermercado</a></li>
                        <li><a href="">Livros</a></li>
                        <li><a href="">Moda</a></li>
                        <li><a href="">Lançamentos</a></li>
                        <li><a href="">Ofertas do dia</a></li>
                        <li><a href=""><CrownSVG size={20} color="#9F9F9F"/><strong>Assinatura</strong></a></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}