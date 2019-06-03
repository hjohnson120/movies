import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import RandomMovie from '../components/RandomMovie'

class Home extends Component {
  state = {
    movies: [],
    randomNumber: []
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
        <section className="random-movie">
          {console.log(this.state.movies[Math.ceil(Math.random() * 20)])}
          {/* {this.state.movies[Math.ceil(Math.random() * 20)]
            return  (
              <div>
                <h1>
                  {movie.title}
                </h1>
              </div>
            
          )
          
           }  */}
        </section>
        <section className="movies-container">
          {this.state.movies.map((movie, index) => {
            return (
              <div className="movie" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="movie poster"
                />
                <Link to="/Movie/:id" className="title">
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
