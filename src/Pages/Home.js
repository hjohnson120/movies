import React, { Component } from 'react'

class Home extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad&language=en-US&page=1'
    )
      .then(resp => {
        return resp.json()
      })
      .then(movieList => {
        console.log(movieList)
        this.setState({
          movies: movieList.results
        })
      })
  }
  render() {
    return (
<<<<<<< HEAD
      <section>{this.state.movies.original_title.map(movie, index)}</section>
=======
      <section>
        {this.state.movies.map((movie, index) => {
          return (
            // <img src = movie. ></img>
            <h1>{movie.title}</h1>
          )
        })}
      </section>
>>>>>>> 81d69cbc6adad5b75ddc76026f664a6049d6974a
    )
  }
}

export default Home
