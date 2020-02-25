import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import Facebook from '../../assets/social-icons/facebook.png';
import Twitter from '../../assets/social-icons/twitter.png';
import Youtube from '../../assets/social-icons/youtube.png';

const Footer = () => {

    return(
        <footer className="footer">

            
            <img src={Logo} alt="logo" className="footer__logo"/>

            <div className="footer__social">
                <Link to='/'><img className='footer__social-icon' src={Facebook} alt="Facebook icon"/></Link>
                <Link to='/'><img className='footer__social-icon' src={Twitter} alt="Twitter icon"/></Link>
                <Link to='/'><img className='footer__social-icon' src={Youtube} alt="Youtube icon"/></Link>
            </div>

            <p className="footer__copyright">Copyright © 2020 My Calories. All rights reserved.</p>

        </footer>
    )
}

export default Footer;