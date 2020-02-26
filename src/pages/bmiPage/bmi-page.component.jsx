import React from 'react';
import './bmi-page.styles.scss';
import HeaderCustom from '../../components/header-custom/header-custom.component';
import BMICalculator from '../../components/BMIPage-components/bmi-calculator/bmi-calculator.component';
import BMITable from '../../components/BMIPage-components/bmi-table/bmi-table.component';


const BMICalculatorPage = () => {

    return(
        <div className="bmi-page">
            <HeaderCustom />
            <BMICalculator />   

            <section className="bmi-page-info">
                <h2 className='bmi-page-info__heading'>What is BMI?</h2>
                <p className='bmi-page-info__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h2 className='bmi-page-info__heading'>BMI Table</h2>
                <p className='bmi-page-info__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <div className="bmi-page-info__tables">
                    <BMITable name={'adults'} />
                    <BMITable name={'Children ( under 20 )'} />
                </div>
                

                <h2 className='bmi-page-info__heading'>BMI Formula</h2>
                <p className='bmi-page-info__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p className='bmi-page-info__formula'>BMI = mass(kg) / height(m&#178;) = 85kg / 1.85 m&#178; = 24.83 kg/m&#178;</p>
                
            </section>
        </div>
    )
}

export default BMICalculatorPage;