import React from 'react';
import './features.styles.scss'
import Feature1 from '../../../assets/feature-SVGs/burn.svg';
import Feature2 from '../../../assets/feature-SVGs/track.svg';
import Feature3 from '../../../assets/feature-SVGs/calories-calculator.svg';
import Feature4 from '../../../assets/feature-SVGs/fruit.svg';
import Feature5 from '../../../assets/feature-SVGs/support.svg';
import Feature6 from '../../../assets/feature-SVGs/tick.svg';

const Features = () => {

    return(

        <div className="features">
            <h2 className="section-title">features</h2>

            <div className="features__list">
                
                <div className="features__item">
                    <img className="features__img" src={Feature1} alt='calories' />
                    <div className="features__title">Track your calories</div>
                </div> 
                <div className="features__item">
                    <img className="features__img" src={Feature2} alt='tracking gym exercises' />
                    <div className="features__title">Track your gym exercises</div>
                </div>
                <div className="features__item">
                    <img className="features__img" src={Feature3} alt='calories calculator' />
                    <div className="features__title">Calories calculator</div>
                </div>
                <div className="features__item">
                    <img className="features__img" src={Feature4} alt='healthy recipes' />
                    <div className="features__title">Healthy recipes</div>
                </div>
                <div className="features__item">
                    <img className="features__img" src={Feature5} alt='support hands' />
                    <div className="features__title">Keeps you motivated</div>
                </div>
                <div className="features__item">
                    <img className="features__img" src={Feature6} alt='easy to use' />
                    <div className="features__title">Easy to use</div>
                </div>

            </div>
        </div>

    )
}

export default Features;