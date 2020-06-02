import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className='footer' >
        <ul id='footer-list' >
           <Link id='footerLinks' to='/forum' > <li> Forum </li> </Link>
           <Link id='footerLinks' to='/' > <li id='footer-links' > &copy; Cinéma à la Maison </li> </Link>
        </ul>
    </div>
     );
}
 
export default Footer;