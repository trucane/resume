import React from 'react';
import styles from './home.module.css';
import {skills} from './iconSkills';
import Skill from './Skill';



const HomeSkill = props =>{

    return(
        <section className={styles.skill_container}>
            {skills.map( (skill) => <Skill props={skill} /> )}
        </section>
    )
}

export default HomeSkill;