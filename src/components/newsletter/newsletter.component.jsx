import React from 'react';
import './newsletter.styles.scss';
import NewsletterImg from '../../assets/newsletter.png';

const Newsletter = () => {
    return(
        <div className="newsletter">

            <div className="newsletter__info">
                <img className='newsletter__img' src={NewsletterImg} alt="envelope"/>

                <div className="newsletter__info-box">
                    <h3 className='newsletter__title'>Let's keep in touch!</h3>

                    <ul className='newsletter__list'>
                        <li className='newsletter__item'>Free recipes</li>
                        <li className='newsletter__item'>Free diet plans</li>
                        <li className='newsletter__item'>Latest news</li>
                    </ul>

                </div>
            </div>

            <form action="#" className="newsletter__form">
                <input className='newsletter__email' type="email" placeholder='Enter your email here ...'/>
                <input className='newsletter__btn custom-button custom-button--green-darker' type="submit" name='SUBSCRIBE'/>
            </form>
        </div>
    )
}

export default Newsletter;