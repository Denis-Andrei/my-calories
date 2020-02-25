import React from 'react';
import './bmi-calculator.styles.scss';
import CustomButton from '../../HomePage-components/custom-button/custom-button.component';



const BMICalculator = () => {

    return(
        <div className="bmi-calculator">
            <div className="bmi-calculator__info">
                
                <div className='bmi-calculator__item'>
                    <label for='age'>Age:</label>
                    <input id='age' placeholder='Eg. 25' type="number"/>
                </div>
                <div className='bmi-calculator__item'>
                    <label for='height'>Height(cm):</label>
                    <input id='height' placeholder='Eg. 175' type="number"/>
                </div>
                <div className='bmi-calculator__item'>
                    <label for='weight'>Weight(kg):</label>
                    <input id='weight' placeholder='Eg. 70' type="number"/>
                </div>
                <div className='bmi-calculator__item'>
                    <label className='bmi-calculator__item-male' for="male">Male</label>
                    <input type="radio" name="gender" id="male" value="male" />
                
                
                    <label className='bmi-calculator__item-female'  for="female">Female</label>
                    <input type="radio" name="gender" id="female" value="female" />
                </div> 

                <CustomButton className='bmi-calculator__btn' name='Calculate' greenDarker />            
             </div>

            <div className="bmi-calculator__results">

            </div>
        </div>
    )
}

export default BMICalculator;