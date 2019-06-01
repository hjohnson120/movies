import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    movies: []
  }

  getMovieApi = () => {
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

  componentDidMount() {
    this.getMovieApi()
  }
  render() {
    return (
      <>
        <section className="movies-container">
          {this.state.movies.map((movie, index) => {
            return (
              <div className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                />
                <Link to="/Movie">{movie.title}</Link>
              </div>
            )
          })}
        </section>
      </>
    )
  }
}

export default Home
