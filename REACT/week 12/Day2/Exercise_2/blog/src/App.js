import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import React from "react"; 

function App(){
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <p><UserFavoriteAnimals favorites = {user.favAnimals}/></p>
    </>
  );
}


export default App

