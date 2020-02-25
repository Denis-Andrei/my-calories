import React from 'react';
import './nav-bar.styles.scss';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(
        <div className="nav-bar">

            <Link to='/'><img className="nav-bar__logo" src={Logo} alt="logo"/></Link>
           

            <nav className='nav-bar__navigation'>
                <ul className='nav-bar__list'>
                    <li><Link className='nav-bar__link' to="/calories">Calories</Link></li>
                    <li><Link className='nav-bar__link' to="/gym">Gym</Link></li>
                    <li><Link className='nav-bar__link' to="/recipes">Recipes</Link></li>
                    <li><Link className='nav-bar__link' to="/BMI-calculator">BMI Calculator</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default NavBar;