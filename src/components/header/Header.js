import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css'
import WhatsApp from '../whatsapp/Whatsapp';
import Email from '../email/Email';
import PhoneCall from '../phone/Phone';


const homeName = "Classical Consultation"

const Header = () => {
    return(
        <div className='container-header'>
            <div className='header'>
                <div className='home'>{homeName}</div>
                <ul className='menuItems'>
                    <li key='bookappointment' fontSize="large">BookAppointment</li>
                    <li key='phone'><PhoneCall/></li>
                    <li key='email'><Email/></li>
                    <li key='whatsapp'><WhatsApp/></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;