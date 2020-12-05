import { useState, useEffect } from 'react'
import MovieList from './MovieList'
import Pagenation from './Pagenation'
import MovieInfo from './MovieInfo'
import Logo from './logo.png'

function App() {
  const api_key = '8c8479a7341bf9bb3bf15f6dc39c6cb4'

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [currentPage, setSurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [currentMovie, setcurrentMovie] = useState(null);
  const [noMovie, setNoMovie] = useState('');

  //1.submit버튼을 클릭하면 input칸에 입력한 value값이 api의 query로 전달되서 MovieList영역이 재 렌더링되도록 하는 함수, 그리고 total_result값을 받아서 pagenation을 구현
  const handleSubmit = (e) => {
    e.preventDefault();//새로고침 방지
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
      .then(data => data.json())
      .catch(data => alert('Fail to get information, check the URl'))
      .then(data => {
        console.log(data)
        setMovies(data.results);//2.불러온 영화 데이터들을 json으로 변환해서 movie변수에 넣음
        setTotalResults(data.total_results);//4.불러온 영화 데이터들의 총 합을 json으로 변환해서 totalResults변수에 넣음
        if (data.total_results === 0) {
          setNoMovie(<div className="noMovie"><p>We can't find the movie</p></div>)
        } else {
          setNoMovie('')
        }
      })
  }
  //7. 전달 받은 파라미터를 api의 page에 넣어서 해당되는 페이지를 렌더링한다.
  const nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${pageNumber}`)
      .then(data => data.json())
      .catch(data => alert('Fail to get information, check the URl'))
      .then(data => {
        setMovies(data.results);
        setSurrentPage(pageNumber);
      })
  }

  const viewMovieInfo = (id) => {
    const fillterMovie = movies.filter(movie => movie.id === id);
    const newCurrentMovie = fillterMovie.length > 0 ? fillterMovie[0] : null;
    setcurrentMovie(newCurrentMovie)
  }

  const closeMovieInfo = () => {
    setcurrentMovie(null)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    setQuery(search)
  }

  const numberPage = Math.floor(totalResults / 20);//5. totalResults값을 20으로 나누어 총 페이지수를 구한한뒤 numberPage변수에 넣는다(api에서도 총 20개의 1페이지 정보만 전달됬음)
  return (
    < div className="App">
      <nav>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt=""></img>
          </div>
          <ul className="menu">
            <li></li>
          </ul>
        </div>
      </nav>
      {currentMovie === null ?
        <div className="container">
          <div className="search-area">
            <h1>Search the Movie</h1>
            < form onSubmit={handleSubmit} >
              <input type="text" className="search-bar" placeholder="Search" value={search} onChange={handleChange} />
              <i class="fas fa-search search-logo"></i>
              <button type='submit'></button>
            </form>
          </div>
          <div className="movie-area">
            <div className="movie-list">
              {movies.map((items, i) => (//3.movie변수에 넣은 영화 데이터들을 array.map을 이용해 movieList들을 렌더링함
                <MovieList key={i} movieId={items.id} title={items.title} img={items.poster_path} viewMovieInfo={viewMovieInfo} voteAverage={items.vote_average} />
              ))}
              {noMovie}
            </div>
          </div>
          {totalResults > 20 ? <Pagenation pages={numberPage} nextPage={nextPage} currentPage={currentPage} /> : ""}
          {/* //6. 만약 총 페이지수가 20이 넘으면  pagenation을 numberPage수만큼 렌더링 한다. 그리고 페이지 숫자를 클릭하면 그 클릭한 숫자를 파라미터로 전달받는다*/}
        </div>
        : <MovieInfo closeMovieInfo={closeMovieInfo} title={currentMovie.title} img={currentMovie.poster_path} overview={currentMovie.overview} releaseDate={currentMovie.release_date} voteAverage={currentMovie.vote_average} />}
    </div >
  );
}

export default App;
