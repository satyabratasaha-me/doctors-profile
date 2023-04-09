import React from 'react';
import ReactDOM from 'react-dom/client';
import EmailIcon from '@mui/icons-material/Email';


const Email = () => {
    return(
        <a href="mailto:satyabrata.saha@outlook.com?subject=ClaasicalConsultation%20Line&body=Body%20Text">
            <EmailIcon fontSize="large"/>
        </a>
    )
}

export default Email;