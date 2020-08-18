import React from 'react';
import './mainnav.css';
import {Link} from 'react-router-dom';





class MainNav extends React.Component{




    render(){
        return(
            <div className="container">
                <div className='logo'>logo </div>
                <nav className="main-nav">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default MainNav;