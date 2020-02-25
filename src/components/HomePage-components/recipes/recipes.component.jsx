import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import HealthyFood from '../../../assets/homepage-images/peppers.png'


const RecipesSection = () => {

    return(
        <div className="hp-section">
            <div className="hp-section__img-box">
                <img className='hp-section__img-box-image' src={HealthyFood} alt="healthy recipes"/>
            </div>
            

            <div className="hp-section__info">
                <h2 className="section-title">Healthy Recipes</h2>
                <p className="hp-section__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="hp-section__buttons">
                    <Link to='/recipes'> <CustomButton name='See All Recipes' orange /> </Link>
                </div>
                
            </div>
        </div>
    )
}

export default RecipesSection;