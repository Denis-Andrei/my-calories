import React from 'react';
import './header-custom.styles.scss';
import Background from '../../assets/bmi-header.jpg'


const sectionStyle = {
    backgroundImage: `linear-gradient(to right, rgba(59, 135, 135, 0.6), rgba(59, 135, 135, 0.6)), url(${Background})`,
    backgroundPosition: 'center'
}

const HeaderCustom = () => {

    return(
        <header className="header-custom" style={sectionStyle}>
            <h1 className='header-custom__heading'>How many calories do I need?</h1>
            <p className='header-custom__text'>Find out with our calories calculator</p>
            <svg className='header-custom__svg'  viewBox="0 0 1920 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M877.814 12.4873C344.731 -38.0184 0 80.9949 0 80.9949V127H1920V80.9949C1920 80.9949 1410.9 62.9929 877.814 12.4873Z" fill="white"/>
            </svg>
        </header>



    )
}

export default HeaderCustom;