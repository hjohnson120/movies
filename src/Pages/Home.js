import React, { Component } from 'react'

class Home extends Component {
  state = {
    movieList: []
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
        movie: resp.data.results
      })
  }
  render() {
    return (
      <section>{this.state.movieList.original_title.map(movie, index)}</section>
    )
  }
}

export default Home
