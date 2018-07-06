import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (      
      <div className="movie_list">
      
      <br/>
      <br/>

        <Link to="/form"><h1>{this.props.title}</h1></Link>
        <img src={this.props.poster} className="images"/>
        <p className="text_description">{this.props.description}</p>
        <p>{this.props.time}</p>
        <a className="movie_times" href="#">{this.props.time1}</a>
        <a className="movie_times" href="#">{this.props.time2}</a>
        <a className="movie_times" href="#">{this.props.time3}</a>
        <a className="movie_times" href="#">{this.props.time4}</a>
        <a className="movie_times" href="#">{this.props.time5}</a>
        <a className="movie_times" href="#">{this.props.time6}</a>
        <a className="movie_times" href="#">{this.props.times}</a>
      </div>    
    );
  }
}

export default MovieItem;