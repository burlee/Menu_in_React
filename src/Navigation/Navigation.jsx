import React, { Component } from 'react'
import classes from './Navigation.scss'
import Logo from './Logo/Logo';
import { NavLink } from 'react-router-dom'
import RotateButton from '../Navigation/RotateButton/RotateButton';
import _ from 'lodash';

class Navigation extends Component {
    state = {
        menuIsOpen: false,
        windowWidth: window.innerWidth,
        showToggleBtn: false
    }

    componentDidMount() {

        window.addEventListener("resize", this.updateDimensions);
        
        if(this.state.windowWidth >= 769){
            this.setState({showToggleBtn: false, menuIsOpen: true})
        }else{
            this.setState({showToggleBtn: true})
        }
    };

    updateDimensions = () => {
        this.setState({windowWidth: window.innerWidth});

        if(this.state.windowWidth >= 769){
            this.setState({showToggleBtn: false, menuIsOpen: true})
        }else{
            this.setState({showToggleBtn: true, menuIsOpen: false})
        }
    };

    render() {
        console.log(this.state)
        const { showToggleBtn, menuIsOpen } = this.state;

        return (
            <div className={classes.Navigation}>
                <Logo />
                {showToggleBtn ?
                    <RotateButton 
                        toggleMenuFn={()=>this.setState({menuIsOpen: !this.state.menuIsOpen})}
                        menuIsOpen={this.state.menuIsOpen}
                    />
                : null}

                {menuIsOpen ? 
                    <ul>
                        <li><a href="http://">Home</a></li>
                        <li><a href="http://">About as</a></li>
                        <li><a href="http://">Our team</a></li>
                        <li><a href="http://">Portfolio</a></li>
                        <li><a href="http://">Contact</a></li>
                        <a className={classes.SocialMedia} href="http://"><i className="fab fa-facebook-f"></i></a>
                        <a className={classes.SocialMedia} href="http://"><i className="fab fa-twitter"></i></a>
                    </ul>
                    : null
                }
            </div>
        )
    }
}

export default Navigation
