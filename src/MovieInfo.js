import Noimg from './noimg.png'

const MovieInfo = props => {
  return (
    <div className="container">
      <div className="movie-infowrap">
        <div className="img">
          {
            props.img == null ? <img src={Noimg} />
              : <img src={`https://image.tmdb.org/t/p/w500/${props.img}`}></img>
          }
        </div>
        <div className="txt">
          <h1>{props.title}</h1>
          <h4>{props.releaseDate}</h4>
          <h1 className="rate"><span>Rate : </span>{props.voteAverage}</h1>
          <p>{props.overview}</p>
          <a className="close-btn" href="#" onClick={props.closeMovieInfo}><i class="fas fa-times-circle"></i></a>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
