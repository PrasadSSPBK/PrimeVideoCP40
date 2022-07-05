import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    slidesToShow: 4,
    infinite: true,
  }
  return (
    <div>
      <Slider {...settings}>
        {moviesList.map(eachList => (
          <MovieItem moviesList={eachList} key={eachList.id} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
