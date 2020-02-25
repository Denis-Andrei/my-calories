import React from 'react';
import { Link } from 'react-router-dom';

import ExerciseTracking from '../../../assets/homepage-images/exercise-tracking.jpg'
import CustomButton from '../custom-button/custom-button.component';


const ExercisesSection = () => {

    return(
        <div className="hp-section">

            <div className="hp-section__info">
                <h2 className="section-title">Exercise Tracker</h2>
                <p className="hp-section__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="hp-section__buttons">
                    <Link className="hp-section__button" to='/gym'> <CustomButton name='Exercise Tracker' blue /> </Link>
                </div>
            </div>

            <div className="hp-section__img-box">
                <img className='hp-section__img-box-image' src={ExerciseTracking} alt="exercise tracking"/>
            </div>
            

           
        </div>
    )
}

export default ExercisesSection;