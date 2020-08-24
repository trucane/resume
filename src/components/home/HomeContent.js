import React from 'react';
import styles from './home.module.css';

import cv from 'classnames';


const HomeContent = () =>{

    return(
        <section className={cv(styles.section, styles.main_container)}>
            <p>
                Programming is the ultimate form of art. In this space where
                absolutely anything is possible... we are only
                limited by our imagination and creativity. 
            </p>
        </section>
    )
}

export default HomeContent;