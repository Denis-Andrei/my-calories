import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FoodCalculator from '../../../assets/homepage-images/food-calculator.webp'


const CaloriesSection = () => {

    return(
        <div className="hp-section">
            <div className="hp-section__img-box">
                <img className='hp-section__img-box-image' src={FoodCalculator} alt="food calculator"/>
            </div>
            

            <div className="hp-section__info">
                <h2 className="section-title">Calories Tracker</h2>
                <p className="hp-section__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="hp-section__buttons">
                    <Link to='/BMI-calculator'> <CustomButton name='BMI Calculator' greenDarker /> </Link>
                    <Link to='/calories'> <CustomButton name='Calories Tracker' green /> </Link>
                </div>
            </div>
        </div>
    )
}

export default CaloriesSection;