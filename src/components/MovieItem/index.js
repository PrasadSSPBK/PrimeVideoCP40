import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import PopUp from 'reactjs-popup'

import './index.css'

const MovieItem = props => {
  const {moviesList} = props
  const {thumbnailUrl, videoUrl} = moviesList
  return (
    <div>
      <PopUp
        modal
        trigger={
          <li className="listItem">
            <button type="button" className="button">
              <img
                src={thumbnailUrl}
                alt="thumbnail"
                className="thumbnailUrl"
              />
            </button>
          </li>
        }
        className="popup-content"
      >
        {close => (
          <div className="popContainer">
            <div className="closeContainer">
              <button
                type="button"
                testid="closeButton"
                className="button"
                onClick={() => close()}
              >
                <IoMdClose className="close" />
              </button>
            </div>
            <div className="videoContainer">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </PopUp>
    </div>
  )
}
export default MovieItem
