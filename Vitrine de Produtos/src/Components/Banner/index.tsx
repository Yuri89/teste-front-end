import BackgroundFirst from '../../Assets/imgs/BackgroundFirst.png'
import './style.scss'

export default function Banner() {
    return (
        <section className='banner'>
            <span>
                <h1>Venha conhecer nossas promoções</h1>
                <p>50% Off nos produtos </p>
                <button>Ver produto</button>
            </span>
            <img src={BackgroundFirst} alt="" />
        </section>
    )
}