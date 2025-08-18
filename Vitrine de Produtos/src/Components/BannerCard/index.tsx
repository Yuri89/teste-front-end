import BackgroundSecond from '../../Assets/imgs/BackgroundSecond.png'
import './style.scss'

export default function BannerCard() {
    return (
        <figure className='banner-card'>
                <span>
                <h1>Parceiros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
            </span>
            <img src={BackgroundSecond} alt="" />
        </figure>
    )
}