import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./Checkout.css"
import { Link } from 'react-router-dom'

export default function CheckoutForm () {
    
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const arrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft} />
    
    return (
        <>
        <div className="container-form">
            <div className="d-flex flex-column align-items-center">            
            <form id="form-signup">
                <h2>Checkout</h2>
                <h3>Confirmación de compra</h3>
                <div id="printInfo"></div>
                <div id="print-alert"></div>
                <div className="input-container-form mb-3" id="alert-name">
                    <label>Nombre</label>
                    <div className="flex">
                    <input type="text" className="form-control" id="name-signup" placeholder="Nombre" />
                    {userIcon}
                    </div>
                </div>
                <div className="input-container-form mb-3" id="alert-lastname">
                    <label>Teléfono</label>
                    <div className="flex">
                    <input type="text" className="form-control" id="phone-signup" placeholder="Teléfono" />
                    {phoneIcon}
                    </div>
                </div>
                <div className="input-container-form mb-3" id="alert-email">
                    <label className="form-label">Email</label>
                    <div className="flex">
                    <input type="email" className="form-control" id="email-signup" placeholder="name@example.com" />
                    {mailIcon}
                    </div>
                  </div>

                    <button type="submit" className="btn btn-success btn-text btn-checkout" id="btn-signup">Confirmar</button>


            </form>            
                    <Link to={'../cart'}> <button className="btn btn-primary btn-text mt-3 btn-return">{arrowLeftIcon} Volver</button> </Link>
        </div>
        </div>
        </>
    )
}