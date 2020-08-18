import React from 'react';
import MainNav from '../nav/MainNav';
import HomeContent from './HomeContent';
import HomeSkill from './HomeSkill';



const Home = () => {



    return(
        <React.Fragment>
            <MainNav />
            <HomeContent />
            <HomeSkill />
        </React.Fragment>
    )
}


export default Home;