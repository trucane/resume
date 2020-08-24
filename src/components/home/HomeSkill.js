import React from 'react';
import styles from './home.module.css';
import {skills} from './iconSkills';
import Skill from './Skill';
import cv from 'classnames';



const HomeSkill = props =>{

    return(
        <section className={cv(styles.skill_container, styles.section)}>
            {skills.map( (skill) => <Skill key={skill.name} props={skill} /> )}
        </section>
    )
}

export default HomeSkill;