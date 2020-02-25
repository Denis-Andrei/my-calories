import React from 'react';
import './jumbotron.styles.scss';
import Jumboimg from '../../../assets/homepage-images/jumbotron-img.png';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const Jumbotron = () => {

    return(
        <header className="jumbotron">

            <div className="jumbotron__text-container">
                <h1 className='jumbotron__heading'>start living healthy</h1>
                <p className="jumbotron__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                <div className="jumbotron__buttons">    
                    <Link to='/sign-in'><CustomButton name='Sign In' green/></Link>
                    <Link to='/register'><CustomButton name='Register' greenDarker/></Link>
                </div>
            </div>

            <div className="jumbotron__img-box">
                <img src={Jumboimg} alt="" className="jumbotron__img"/>
            </div>
            
            <svg className='jumbotron__svg'  viewBox="0 0 1920 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M877.814 12.4873C344.731 -38.0184 0 80.9949 0 80.9949V127H1920V80.9949C1920 80.9949 1410.9 62.9929 877.814 12.4873Z" fill="white"/>
            </svg>
        </header>



    )
}

export default Jumbotron;