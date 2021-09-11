import React from "react";
import "./mainnav.css";
import { Link } from "react-router-dom";


const menuItems = [
  {name:'Home'},
  {name:'About'},
  // {name:'Projects'},
  // {name:'Skills'},
  // {name:'Contact'},
]

class MainNav extends React.Component {


  state={
    mobile:false,
  }

  componentDidMount(){

    //mount get window size method
    this.getWindowSize()

    //bind this to VR DOM
    window.addEventListener("resize", this.getWindowSize.bind(this))
  }


  toggleMobileView = () =>{
    //toggle mobile state to true or false
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

  componentWillUnmount(){
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
            {menuItems.map(({name}, index) =>(
              <li key={index}>
                <Link 
                  className='link' 
                  to={name === 'Home' ? '/' : name}
                  data-test={`'${name}'`} 
                  onClick={() => this.activeLink(name)}  >{name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <menu className={mobile ? 'burger open' : 'burger'} data-test='Burger' onClick={this.toggleMobileView}>
          <div></div>
          <div></div>
          <div></div>
        </menu>
      </div>
    );
  }
}

export default MainNav;
