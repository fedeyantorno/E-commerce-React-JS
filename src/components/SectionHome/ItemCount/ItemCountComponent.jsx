import { useState } from "react"
import "./ItemCountComponent.css"

export default function ItemCountComponent({stock}) {

    const [counter, setCounter] = useState(1)

    const handleClickInc = () => {if (counter < stock) {setCounter(counter + 1)}}

    const handleClickDec = () => {if (counter > 1) {setCounter(counter - 1)}}

    return (
        <>
        <div className="btn-count-elements">
        <button onClick={handleClickInc} className='btn btn-outline-secondary btn-sm btn-counter'>+</button>
        <p className="text-counter">{counter}</p>
        <button onClick={handleClickDec} className='btn btn-outline-secondary btn-sm btn-counter'>-</button>
        </div>
        </>
    )
}