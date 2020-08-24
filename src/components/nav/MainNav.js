import React from "react";
import "./mainnav.css";
import { Link } from "react-router-dom";

class MainNav extends React.Component {


  state={
    mobile:false,
  }

  componentDidMount(){

    //mount get window size method
    this.getWindowSize()

    //bind this to VR DOM window
    window.addEventListener("resize", this.getWindowSize.bind(this))
  }


  toggleBurger = () =>{
    //set mobile state to true or false
    this.setState({mobile:!this.state.mobile}, () => '')
  }

  activeLink = (value) =>{
    // let target = document.querySelectorAll(['data-name=${value}']);
    // console.log(target)
  }

  getWindowSize = () => {
    const {mobile} = this.state

    //check if window size is greater than 700px and mobile state is true
    if(window.innerWidth > 700 && mobile){
      this.setState({mobile: false})
    }
  }

  componentWillMount(){
    //remove event listener
    window.addEventListener("resize", this.getWindowSize.bind(this))
  }

  render() {
    const {mobile} = this.state
    return (
      <div className="container">
        <div className="logo">logo</div>
        <nav className={mobile ? 'main-nav open' : 'main-nav'}>
          <ul>
            <li>
              <Link to="/" data-name='Home' >Home</Link>
            </li>
            <li>
              <Link to="/about" data-name='About' onClick={(e) => this.activeLink('About')} >About</Link>
            </li>
            <li data-name='Projects'onClick={() => this.activeLink('Project')} >Projects</li>
            <li data-name='Skills'onClick={() => this.activeLink('Skills')} >Skills</li>
            <li data-name='Contact' onClick={() => this.activeLink('Contact')} >Contact</li>
          </ul>
        </nav>




        <menu className={mobile ? 'burger open' : 'burger'} onClick={this.toggleBurger}>
          <div></div>
          <div></div>
          <div></div>
        </menu>
      </div>
    );
  }
}

export default MainNav;
