import React, { Component } from 'react';
import MovieItem from './movie_item';

class Index extends Component {

  // constructor() {
  //   super()

  //   this.state = {
  //     movies: [
  //       {_id: 0, title: "Movie 1", poster: "https://imgc.allpostersimages.com/img/posters/the-terminator_u-L-F13M960.jpg?src=gp&w=300&h=375"},
  //       {_id: 1, title: "Movie 2", poster: "https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg"}
  //     ]
  //   }

  // }

  render() {

    this.movies = [
        {_id: 0, title: "Schwarzenegger", poster: "https://imgc.allpostersimages.com/img/posters/the-terminator_u-L-F13M960.jpg?src=gp&w=300&h=375", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat, leo ac molestie volutpat, magna tellus congue libero, at tempor libero nisi at nisi. Vivamus aliquet ultricies vehicula. "},
        {_id: 1, title: "Star Wars : The Last Jedi", poster: "https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat, leo ac molestie volutpat, magna tellus congue libero, at tempor libero nisi at nisi. Vivamus aliquet ultricies vehicula." },
        {_id: 2, title: "GodFather", poster: "https://wearepalermo.com/wp-content/uploads/2016/11/godfather-locations-shooting.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat, leo ac molestie volutpat, magna tellus congue libero, at tempor libero nisi at nisi. Vivamus aliquet ultricies vehicula. "},
        {_id: 3, title: "Silent Hill", poster: "http://www.sonypictures.com/movies/silenthill/assets/images/onesheet.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat, leo ac molestie volutpat, magna tellus congue libero, at tempor libero nisi at nisi. Vivamus aliquet ultricies vehicula. "},
        {_id: 4, title: "Prison Break", poster: "https://static.next-episode.net/tv-shows-images/huge/prison-break.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat, leo ac molestie volutpat, magna tellus congue libero, at tempor libero nisi at nisi. Vivamus aliquet ultricies vehicula. "},
        {_id: 5, title: "Dark Knight", poster: "https://images-na.ssl-images-amazon.com/images/I/712HEalnFRL._SL1088_.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat, leo ac molestie volutpat, magna tellus congue libero, at tempor libero nisi at nisi. Vivamus aliquet ultricies vehicula. "},
        {_id: 6, title: "12 Angry Men", poster: "http://www.americancentury.org/show_men.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat, leo ac molestie volutpat, magna tellus congue libero, at tempor libero nisi at nisi. Vivamus aliquet ultricies vehicula. "},
        {_id: 7, title: "Schindler's List", poster: "https://occ-0-1001-999.1.nflxso.net/art/262d2/22c3557fd2377a217ba1d5a83bab31e1f17262d2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat, leo ac molestie volutpat, magna tellus congue libero, at tempor libero nisi at nisi. Vivamus aliquet ultricies vehicula. "}
      ]

    return (
      <div>
        {
          this.movies.map(movie => {
              return (
                <MovieItem key={movie._id} {...movie} />
              )
          })
        }
      </div>
    );
  }
}

export default Index;