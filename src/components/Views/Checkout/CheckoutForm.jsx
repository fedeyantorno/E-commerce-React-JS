import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./Checkout.css"
import { Link } from 'react-router-dom'
import { useState } from "react";


export default function CheckoutForm ({ onConfirm }) {
    
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const arrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft} />

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    const handleName = ({ target }) => setName(target.value)
    const handlePhone = ({ target }) => setPhone(target.value)
    const handleEmail = ({ target }) => setEmail(target.value)
    
    return (
        <>
        <div className="container-form">
            <div className="d-flex flex-column align-items-center">            
            <form onSubmit={handleConfirm}>
                <h2>Checkout</h2>
                <h3>Confirmación de compra</h3>
                <div className="input-container-form mb-3">
                    <label>Nombre</label>
                    <div className="flex">
                    <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={handleName} />
                    {userIcon}
                    </div>
                </div>
                <div className="input-container-form mb-3">
                    <label>Teléfono</label>
                    <div className="flex">
                    <input type="text" className="form-control" placeholder="Teléfono" value={phone} onChange={handlePhone} />
                    {phoneIcon}
                    </div>
                </div>
                <div className="input-container-form mb-3">
                    <label className="form-label">Email</label>
                    <div className="flex">
                    <input type="email" className="form-control" placeholder="name@example.com" value={email} onChange={handleEmail} />
                    {mailIcon}
                    </div>
                </div>
                <button type="submit" className="btn btn-success btn-text btn-checkout" onClick={handleConfirm}>Confirmar</button>
            </form>            
            <Link to={'../cart'}> <button className="btn btn-primary btn-text mt-3 btn-return">{arrowLeftIcon} Volver</button> </Link>
        </div>
        </div>
        </>
    )
}