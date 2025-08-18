import { useState } from "react";
import LeftSVG from "../../Assets/svgs/Left";
import RightSVG from "../../Assets/svgs/Right";
import type { CardData } from "../../Types/CardType";
import Card from "../Card";
import './style.scss'

export default function CardDisplay({ products }: CardData) {
    const [position, setPosition] = useState<number>(0)

    function ClickLeft() {
        if (0 > (position)) {
            setPosition(position => position + 200)
        }else{
        setPosition(position => position = 0)
        }
    }

    function ClickRight() {
        const count = products?.length ?? 0;
        const cal = -(count * 260) - 10;
        if (cal < (position)) {
            setPosition(position => position - 200)
        }
        else{
            setPosition(position => position = -2650)
        }
    }

    return (
        <section className="section-first">
            <LeftSVG className="left" onClick={ClickLeft} />
            <div className="carrousel">
                <div className="display" style={{ translate: `${position}px` }}>
                    {products ? products.map((item, index) => (
                        <Card key={index} nameProduct={item.productName} price={item.price} photo={item.photo} />
                    )) : null}
                </div>
            </div>
            <RightSVG className="right" onClick={ClickRight} />
        </section>
    )
}