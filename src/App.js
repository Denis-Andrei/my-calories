import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import NavBar from './components/nav-bar/nav-bar.component';
import Footer from './components/footer/footer.component';
import Newsletter from './components/newsletter/newsletter.component';
import BMICalculatorPage from './pages/bmiPage/bmi-page.component';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/BMI-calculator' component={BMICalculatorPage} />
      </Switch>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
