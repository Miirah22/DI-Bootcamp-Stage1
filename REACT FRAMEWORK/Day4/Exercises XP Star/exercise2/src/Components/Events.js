import React, {useState} from 'react'

const Events = () => {
    const clickMe = () => {
        alert('I was clicked');
    };
    const [inputValue, setInputValue] = useState('');
    const [isToggleOn, setIsToggleOn] = useState(true);

    const toggleButton = () => {
        setIsToggleOn(!isToggleOn);
    }

    const handleKeyDown = (event) => {
       if (event.key === 'Enter') {
        alert('The Enter key was pressed, your input is: ' + inputValue);
       }
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
  return (
    <div>
        <button onClick={clickMe}>Click me!</button>
        <input type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Press the ENTER key!" />
        <button onClick={toggleButton}> {isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default Events;