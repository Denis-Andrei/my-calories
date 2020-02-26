import React from 'react';
import './bmi-form.styles.scss';
import CustomButton from '../../HomePage-components/custom-button/custom-button.component';




const BMIForm = () => {

    return(
        <div className="bmi-form">
            {/* <h2 className='bmi-form__heading'>BMI form</h2> */}

            <div className="bmi-form__info">
                
                <div className='bmi-form__item'>
                    <label for='age'>Age:</label>
                    <input id='age' placeholder='Eg. 25' type="number"/>
                </div>
                <div className='bmi-form__item'>
                    <label for='height'>Height(cm):</label>
                    <input id='height' placeholder='Eg. 175' type="number"/>
                </div>
                <div className='bmi-form__item'>
                    <label for='weight'>Weight(kg):</label>
                    <input id='weight' placeholder='Eg. 70' type="number"/>
                </div>
                <div className='bmi-form__item'>
                    <label className='bmi-form__item-male' for="male">Male</label>
                    <input type="radio" name="gender" id="male" value="male" />
                
                
                    <label className='bmi-form__item-female'  for="female">Female</label>
                    <input type="radio" name="gender" id="female" value="female" />
                </div> 

                <div  className='bmi-form__btn'>
                    <CustomButton name='Calculate' greenDarker />  
                </div>          
             </div>

            
        </div>
    )
}

export default BMIForm;