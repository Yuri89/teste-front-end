import '../Styles/Global.scss'
import Navbar from '../Components/Navbar'
import BackgroundFirst from '../Assets/imgs/BackgroundFirst.png'
import BackgroundSecond from '../Assets/imgs/BackgroundSecond.png'
import BuyCategory from '../Components/BuyCategory'
import CardDisplay from '../Components/CardDisplay'
import Data from '../Utils/Data.json'
import { useState, useEffect } from 'react'
import type { CardData } from '../Types/CardType'
import Tab from '../Components/Tabs'
import './style.scss'
import CircleCard from '../Components/CircleCard'
import Footer from '../Components/Footer'

function Pagina() {
  const [data, setData] = useState<CardData | null>(null)

  async function fetchTest() {
    try {
      const interval = setInterval(() => {
        setData({
          success: true,
          products: Data.products,
        })
      }, 1000)

      return () => clearInterval(interval)
    } catch (err) {
      setData({ success: false, products: [] })
    }
  }

  // executa ao montar
  useEffect(() => {
    fetchTest()
  }, [])

  return (
    <div className='main'>
      <Navbar />
      <section>
        <img src={BackgroundFirst} alt="" />
      </section>
      <section>
        <BuyCategory />
      </section>
      <section>
        <div className='pr-first'>
          <div>
            <span>Podutos Relacionadaos</span>
            <div className='line'></div>
          </div>
        </div>
        <Tab />
        <CardDisplay success={data?.success ?? false} products={data?.products ?? []} />
      </section>
      <section>
        <img src={BackgroundSecond} alt="" />
        <img src={BackgroundSecond} alt="" />
      </section>
      <section>
        <div className='pr-first'>
          <div>
            <span>Podutos Relacionadaos</span>
            <div className='line'></div>
          </div>
        </div>
        ver mais
        <CardDisplay success={data?.success ?? false} products={data?.products ?? []} />
      </section>
      <section>
        <img src={BackgroundSecond} alt="" />
        <img src={BackgroundSecond} alt="" />
      </section>
      <section>
        <div className='pr-first'>
          <div>
            <span>Podutos Relacionadaos</span>
            <div className='line'></div>
          </div>
        </div>
        ver mais
        <CardDisplay success={data?.success ?? false} products={data?.products ?? []} />
      </section>
      <section>
        <div className='pr-second'>
          <div>
            <span>Navegue por marcas</span>
            <CircleCard/>
          </div>
        </div>
      </section>
      <section>
        <div className='pr-first'>
          <div>
            <span>Podutos Relacionadaos</span>
            <div className='line'></div>
          </div>
        </div>
        ver mais
        <CardDisplay success={data?.success ?? false} products={data?.products ?? []} />
      </section>
      <Footer/>
    </div>
  )
}

export default Pagina
