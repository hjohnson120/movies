import React, { Component } from 'react'

class Home extends Component {
  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=cfc38bddee72b29ba6fdad5b0b3b72ad&language=en-US&page=1'
    )
      .then(resp => {
        return resp.json()
      })
      .then(movieList => {
        console.log(movieList)
        movies: resp.data.results
      })
  }
  render() {
    return <></>
  }
}

export default Home
