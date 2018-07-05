import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>
                <div class="logo">
                <i class="fas fa-bars"></i>
            </div>
            <div class="welcome">
                <h2>West Valley City Dollar Theater</h2>
            </div>
            <div class="links">
                <div class="link">	
                <a href="#" class="link">About</a>
                </div>
                <div class="link">
                <a href="#" class="link">Shopping Cart</a>
                </div>
                
                <div class="link">
                <a href="#" class="link">Featured Movies</a>
                </div>
            </div>

                </div>
            </header>
        );
    }
}