import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import RandomMovie from '../components/RandomMovie'

class Home extends Component {
  state = {
    movies: [],
    randomNumber: [],
    featuredMovie: {}
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
          movies: movieList.results,
          featuredMovie: movieList.results[Math.ceil(Math.random() * 20)]
        })
      })
  }

  componentDidMount() {
    this.getMovieApi()
  }
  render() {
    return (
      <>
        <section className="random-container">
          <h1>Featured Movie</h1>
          <section className="random-movie">
            {console.log(this.state.movies[Math.ceil(Math.random() * 20)])}

            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${
                  this.state.featuredMovie.poster_path
                }`}
                alt="movie poster"
              />
            </div>
          </section>
        </section>
        <h1 className="playing">Now Playing</h1>
        <section className="movies-container">
          {this.state.movies.map((movie, index) => {
            return (
              <div className="movie" key={index}>
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="movie poster"
                />
                <Link to={`/movie/${movie.id}`} className="title">
                  {movie.title}
                </Link>
              </div>
            )
          })}
        </section>
      </>
    )
  }
}

export default Home
