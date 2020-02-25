import React from 'react';
import Jumbotron from '../../components/HomePage-components/jumbotron/jumbotron.component';
import Features from '../../components/HomePage-components/features/features.component';
import CaloriesSection from '../../components/HomePage-components/calories/calories.component';
import ExercisesSection from '../../components/HomePage-components/exercises/exercises.component';
import RecipesSection from '../../components/HomePage-components/recipes/recipes.component';

const HomePage = () => {

    return(
        <div className="homepage">
            <Jumbotron />
            <Features />
            <CaloriesSection />
            <ExercisesSection />
            <RecipesSection />
        </div>
    )
}

export default HomePage;