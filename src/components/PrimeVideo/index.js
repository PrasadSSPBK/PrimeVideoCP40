import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachList => eachList.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachList => eachList.categoryId === 'COMEDY',
  )

  return (
    <div className="mainContainer">
      <div className="imContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="primeVideo"
        />
      </div>
      <div className="carosuelContainer">
        <div className="firstContainer">
          <h1 className="head">Action movies</h1>
          <MovieSlider moviesList={actionMovies} />
        </div>
        <div className="firstContainer">
          <h1 className="head">Comedy movies</h1>
          <MovieSlider moviesList={comedyMovies} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
