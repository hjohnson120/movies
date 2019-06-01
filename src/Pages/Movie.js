import React, { Component } from 'react'
// import Home from './Pages/Home'

class Movie extends Component {
  state = {
    movie: {}
  }
  componentsDidMount() {
    const movieId = this.props.match.params.id

    getSelectedMovie = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad`
      )
        .then(resp => {
          return resp.json()
        })
        .then(movieSelected => {
          console.log(movieSelected)
          this.setState({
            movie: movieSelected.data
          })
        })
    }
  }

  render() {
    return (
      <>
        <section className="movies-container" />
      </>
    )
  }
}

export default Movie
