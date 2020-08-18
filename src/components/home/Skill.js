import React from 'react';
import styles from './home.module.css';

const Skill = (props) =>{
    const {name, path, descr} = props.props
    return(
        <div className={styles.skill_container}>
            <div><img src={path} alt={name} /></div>
            <h5>{name}</h5>
            <p>{descr}</p>
        </div>
    )
}

export default Skill;