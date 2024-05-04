import React, {useState, useEffect} from 'react'

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert("useEffect reached");
  }, []
  );

  const handleColorChange = () => {
    setFavoriteColor("blue");
  };

  return (
   <div>
    <header>
      <h1>My Favorite Color is {favoriteColor}</h1>
    </header>
    <button onClick={handleColorChange}>Change Color</button>
   </div>
  )
}

export default Color