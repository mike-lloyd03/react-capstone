import React, {useState, useContext} from "react"
import { Context } from "../utils/Context"

function Image(props) {
  const [hovered, setHovered] = useState(false)
  const {toggleFavorite} = useContext(Context)

  const heartType = props.source.isFavorite ? 'ri-heart-fill' : 'ri-heart-line'

  const heartIcon = (hovered || props.source.isFavorite) && <i
    onClick={() => toggleFavorite(props.source.id)}
    className={`${heartType} favorite`}
  />

  const plusIcon = hovered && <i className="ri-add-circle-line cart" />


  return (
    <div 
      className={`${props.className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {heartIcon}
      {plusIcon}
      <img src={props.source.url} className="image-grid" alt=""/>
    </div>
  )
}

export default Image
