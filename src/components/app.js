import React, { Component } from 'react';
import Header from './navbar';
import Index from './index'

export default class App extends Component {
  render() {
    return (
      <div className="main_title">
        <Header />
        <Index />
      </div>
    );
  }
}
