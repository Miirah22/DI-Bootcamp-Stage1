import React from"react";

function UserFavoriteAnimals(props) {
    
    return (
        <ul>
                {props.favorites.map(favAnimal => <li>{favAnimal}</li>)}
         </ul>

    )
    
}

export default UserFavoriteAnimals