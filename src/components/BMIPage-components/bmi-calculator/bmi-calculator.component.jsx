import React from 'react';
import './bmi-calculator.styles.scss';
import BMIResults from '../bmi-results/bmi-results.component';
import BMIForm from '../bmi-form/bmi-form.component';



const BMICalculator = () => {

    return(
        <div className="bmi-calculator">
            <h2 className='bmi-calculator__heading'>BMI Calculator</h2>

            <div className='bmi-calculator__container'>
                <BMIForm />
                <BMIResults />
            </div>

            
        </div>
    )
}

export default BMICalculator;