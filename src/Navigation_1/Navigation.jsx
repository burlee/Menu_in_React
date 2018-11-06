import React, { Component } from 'react'
import classes from './Navigation.scss'
import Logo from './Logo/Logo';
import RotateButton from './RotateButton/RotateButton'
import _ from 'lodash';

class Navigation extends Component {
    state = {
        menuIsOpen: false
    }

    render() {
        const { menuIsOpen } = this.state;

        return (
            <div className={classes.Navigation}>
                <Logo />
                <RotateButton 
                    toggleMenuFn={()=>this.setState({menuIsOpen: !this.state.menuIsOpen})}
                    menuIsOpen={this.state.menuIsOpen}
                />

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
