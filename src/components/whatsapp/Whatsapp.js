import React from 'react';
import ReactDOM from 'react-dom/client';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const WhatsApp = () => {
    return(
        <a href="https://api.whatsapp.com/send?phone=9527636700&text=Hello%20there!">
            <WhatsAppIcon fontSize="large"/>
        </a>
    )
}

export default WhatsApp;