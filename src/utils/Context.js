import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider(props) {
  const [pictures, setPictures] = useState([])

  const toggleFavorite = (id) => {
    setPictures(prevPictures => prevPictures.map(p => {
      if (p.id === id) {
        return {
          ...p,
          isFavorite: !p.isFavorite
        }
      }
      return p
    }))
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPictures(data))
  },[])

  return (
    <Context.Provider value={{pictures, toggleFavorite}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}

