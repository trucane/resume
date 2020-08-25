import React from 'react';
import MainNav from '../nav/MainNav';
import HomeContent from './HomeContent';
import HomeSkill from './HomeSkill';
import styles from './home.module.css';



const Home = () => {



    return(
        <div className='home_container'>
            <MainNav />
            <HomeContent />
            <HomeSkill />
        </div>
    )
}


export default Home;