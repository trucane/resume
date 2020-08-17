import React from 'react';
import './mainnav.css';





class MainNav extends React.Component{




    render(){
        return(
            <div className="container">
                <div className='logo'>logo </div>
                <nav className="main-nav">
                    <ul>
                        <li>Home</li>
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