import React, {useContext} from "react"
import { Context } from "../utils/Context"
import Image from "../components/Image"
import {getClass} from "../utils/index"

function Photos() {
  // Get the allPhotos array from context
  // map over it, creating <Image /> elements of the component we just made
  // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
  const {pictures} = useContext(Context)
  
  const pictureArray = pictures.map((photo, i) =>
                      <Image 
                        key={photo.id}
                        source={photo}
                        className={getClass(i)}
                      />)

  return (
    <main className="photos">
      {pictureArray}
    </main>
  )
}

export default Photos