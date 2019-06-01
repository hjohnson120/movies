import React, { Component } from 'react'

class Movie extends Component {
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/420817/credits?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad`
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

  render() {
    return <h1>Hi</h1>
  }
}

export default Movie
