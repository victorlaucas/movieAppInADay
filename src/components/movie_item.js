import React, { Component } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (      
      <div className="movie_list">
        <h1 className="h1">{this.props.title}</h1>
        <p>{this.props.description}</p>
        <img src={this.props.poster} className="images"/>
      </div>    
    );
  }
}

export default MovieItem;