import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                <div class="logo">
                <i class="fas fa-bars"></i>
            </div>
            <div class="welcome">
                {/* <h2>Bottega Dollar Theater</h2> */}
                <Link to="/"><h2>Bottga Dollar Theater</h2></Link>
            </div>
            <div class="links">
                <div class="link">  
                <Link to="/faq"><div>About</div></Link>
                </div>
                {/* <div class="link">
                <a href="#" class="link">Shopping Cart</a>
                </div> */}
                
                <div class="link">
                <Link to="/movies"><div>Movies</div></Link>
                </div>
            </div>
                </div>
            </header>
        );
    }
}