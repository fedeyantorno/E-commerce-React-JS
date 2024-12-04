import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhone, faUser, faArrowLeft, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import "./Checkout.css"
import { Link } from 'react-router-dom'
import { useState } from "react";


export default function CheckoutForm ({ onConfirm }) {
    
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phoneIcon = <FontAwesomeIcon icon={faMobileScreenButton} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const arrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft} />

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'El nombre es requerido!';
        if (!phone) {
            newErrors.phone = 'El teléfono es requerido!';
        } else if (!/^\+54\s9\s\(\d{2,4}\)\s\d{4}-\d{4}$/.test(phone)) {
            newErrors.phone = 'El teléfono no es válido!';
        }
        if (!email) {
          newErrors.email = 'El email es requerido!';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'El email no es válido!';
        }
        setErrors(newErrors);

        // Remover mensajes de error después de 3 segundos
        if (Object.keys(newErrors).length > 0) {
            setTimeout(() => {
                setErrors({});
            }, 3000);
        }
      
        return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
    };

    const handleConfirm = (e) => {
        e.preventDefault()
        if (validateInputs())
        onConfirm({ name, phone, email })
    }

    const handleName = (e) => setName(e.target.value)
    const handlePhone = (e) => setPhone(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    
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
                    <div>
                    {errors.name && <p className="text-item-count"><span className="red">{errors.name}</span></p>}
                    </div>
                </div>
                <div className="input-container-form mb-3">
                    <label>Teléfono</label>
                    <div className="flex">
                    <input type="text" className="form-control" placeholder="Ej. 54 9 11 1111-1111" value={phone} onChange={handlePhone} />
                    {phoneIcon}
                    </div>
                    <div>
                    {errors.phone && <p className="text-item-count"><span className="red">{errors.phone}</span></p>}
                    </div>
                </div>
                <div className="input-container-form mb-3">
                    <label className="form-label">Email</label>
                    <div className="flex">
                    <input type="email" className="form-control" placeholder="name@example.com" value={email} onChange={handleEmail} />
                    {mailIcon}
                    </div>
                    <div>
                    {errors.email && <p className="text-item-count"><span className="red">{errors.email}</span></p>}
                    </div>
                </div>
                <button type="submit" className="btn btn-success btn-text btn-checkout">Confirmar</button>
            </form>
            <Link to={'../cart'}><button className="btn btn-outline-success btn-text mt-3">{arrowLeftIcon} Volver</button></Link>
        </div>
        </div>
        </>
    )
}