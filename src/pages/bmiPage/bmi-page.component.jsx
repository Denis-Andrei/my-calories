import React from 'react';
import './bmi-page.styles.scss';
import HeaderCustom from '../../components/header-custom/header-custom.component';
import BMICalculator from '../../components/BMIPage-components/bmi-calculator/bmi-calculator.component';


const BMICalculatorPage = () => {

    return(
        <div className="bmi-page">
            <HeaderCustom />
            <BMICalculator />   
        </div>
    )
}

export default BMICalculatorPage;