import React from 'react';
import './bmi-results.styles.scss';




const BMIResults = () => {

    return(
        <div className="bmi-results">
            <h2 className='bmi-results__heading'>Results</h2>
            <ul className="bmi-results__list">
                <li className="bmi-results__item">Age: <span>25</span></li>
                <li className="bmi-results__item">Height: <span>185 cm</span></li>
                <li className="bmi-results__item">Weight: <span>85 kg</span></li>
                <li className="bmi-results__item">Gender: <span>male</span></li>
            </ul>

            <div className="bmi-results__result-boxes">
                <div className="bmi-results__result-box bmi-results__result-box--inactive">
                    <h3 className='bmi-results__calories-number'>1500</h3>
                    <p className='bmi-results__text'>calories</p>
                    <p className='bmi-results__activity'>INACTIVE</p>
                </div>
                <div className="bmi-results__result-box bmi-results__result-box--lessactive">
                    <h3 className='bmi-results__calories-number'>2000</h3>
                    <p className='bmi-results__text'>calories</p>
                    <p className='bmi-results__activity'>Less active</p>
                </div>
                <div className="bmi-results__result-box bmi-results__result-box--active">
                    <h3 className='bmi-results__calories-number'>2500</h3>
                    <p className='bmi-results__text'>calories</p>
                    <p className='bmi-results__activity'>active</p>
                </div>
                <div className="bmi-results__result-box bmi-results__result-box--veryactive">
                    <h3 className='bmi-results__calories-number'>3000</h3>
                    <p className='bmi-results__text'>calories</p>
                    <p className='bmi-results__activity'>Very active</p>
                </div>
            </div>
            
        </div>
    )
}

export default BMIResults;