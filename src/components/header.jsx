import React, { Component } from 'react';
import logo from '../../public/images/logo.png';
import Carrinho from './carrinho';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="row">
                        <div className="header-logo columns small-9">
                            <img src={logo} alt="profite"/>
                        </div>
                        <Carrinho/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
