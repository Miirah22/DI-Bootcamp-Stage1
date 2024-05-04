import Car from './Components/Car';

function App() {
  const carInfo = {name: "Ford", model: "Mustang"};
  return (
    <div>
      <Car details={carInfo} />
    </div>
  );
}

export default App;
