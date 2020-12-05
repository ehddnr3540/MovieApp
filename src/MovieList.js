import React from 'react'
import Noimg from './noimg.png'

const MovieList = (props) => {
  return (
    <div className="movie-wrap">
      <div className="movie-img">
        {
          props.img == null ? <img src={Noimg} />
            : <img src={`https://image.tmdb.org/t/p/w500/${props.img}`}></img>
        }
      </div>
      <div className="movie-content">
        <h4>{props.title}</h4>
        <h3>{props.voteAverage}</h3>
      </div>
      <div className="detail-btn">
        <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>Detail</a>
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default MovieList


