import React, {useState} from 'react'
import Garage from './Garage';


const Car = ({details}) => {
  const [color, setColor] = useState('red');
  return (
    <div>
      <h1>This car is {color} {details.model}</h1>
      <button onClick={() => setColor('blue')}>Change Color</button>
      <Garage size="small" />
    </div>
  )
}

export default Car