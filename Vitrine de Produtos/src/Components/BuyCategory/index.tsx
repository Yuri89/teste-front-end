import Tecnologia from '../../Assets/imgs/tecnologia.png'
import Super from '../../Assets/imgs/supermercados 1.png'
import Whiskey from '../../Assets/imgs/whiskey.png'
import Ferramentas from '../../Assets/imgs/ferramentas 1.png'
import Cuidados from '../../Assets/imgs/cuidados-de-saude 1.png'
import Corrida from '../../Assets/imgs/corrida 1.png'
import Moda from '../../Assets/imgs/moda 1.png'

import './style.scss'



export default function BuyCategory() {
    return (
        <section className='section-category'>
            <div className='card-category'>
                <img className='icon-unique' src={Tecnologia} alt="" />
                <span>Tecnologia</span>
            </div>

            <div className='card-category'>
                <img className='icon' src={Super} alt="" />
                <span>Supermercado</span>
            </div>

            <div className='card-category'>
                <img className='icon' src={Whiskey} alt="" />
                <span>Bebidas</span>
            </div>

            <div className='card-category'>
                <img className='icon' src={Ferramentas} alt="" />
                <span>Ferramentas</span>
            </div>

            <div className='card-category'>
                <img className='icon' src={Corrida} alt="" />
                <span>Saúde</span>
            </div>

            <div className='card-category'>
                <img className='icon' src={Cuidados} alt="" />
                <span>Esportes e Fitness</span>
            </div>

            <div className='card-category'>
                <img className='icon' src={Moda} alt="" />
                <span>Moda</span>
            </div>
        </section>
    )
} 