import React from 'react';
import ReactDOM from 'react-dom/client';
import PhoneIcon from '@mui/icons-material/Phone';


const PhoneCall = () => {
    return(
        <a href="tel:9527636700" >
            <PhoneIcon fontSize="large"/>
        </a>
    )
}

export default PhoneCall;