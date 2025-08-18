import Logo from '../../Assets/svgs/Logo'
import './style.scss'

export default function CircleCard(){

    const logo = <Logo size={35}/>

    return(
        <nav className='companies'>
            <a href="" className='bubble'>{logo}</a>
            <a href="" className='bubble'>{logo}</a>
            <a href="" className='bubble'>{logo}</a>
            <a href="" className='bubble'>{logo}</a>
            <a href="" className='bubble'>{logo}</a>
        </nav>
    )
}