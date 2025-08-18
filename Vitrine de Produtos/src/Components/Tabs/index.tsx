import { useState } from 'react'
import './style.scss'

export default function Tab() {
    const [selected, setSelected] = useState<number[]>([1, 0, 0, 0, 0, 0])


    function toggler(number: number) {
        if (selected[number] == 0) {
            setSelected([0, 0, 0, 0, 0, 0])
            setSelected(selected => selected.map((index) => (index === number ? 1 : 0)));
        }
    }
    return (
        <nav className="tab">
            <ul>
                <li className={selected[0] == 1 ? 'active' : ''} onClick={() => toggler(0)}>
                    CELULAR
                </li>
                <li className={selected[1] == 1 ? 'active' : ''} onClick={() => toggler(1)}>
                    ACESSÓRIOS
                </li>
                <li className={selected[2] == 1 ? 'active' : ''} onClick={() => toggler(2)}>  
                    TABLETS
                </li>
                <li className={selected[3] == 1 ? 'active' : ''} onClick={() => toggler(3)}>
                    NOTEBOOKS
                </li>
                <li className={selected[4] == 1 ? 'active' : ''} onClick={() => toggler(4)}>
                    TVS
                </li>
                <li className={selected[5] == 1 ? 'active' : ''} onClick={() => toggler(5)}>
                    VER TODOS
                </li>
            </ul>
        </nav>
    )
}