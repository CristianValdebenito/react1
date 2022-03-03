
import './App.css';

import PersonCard from './Components/PersonCard';
function App() {
  return (
    <div className="App">
     <PersonCard nombre={"Cristian,"} nombre2={"Andres"} edad={"45"} pelo={"Negro"}/>
     <PersonCard nombre={"David,"} nombre2={"Hassenford"} edad={"70"} pelo={"Rojo"}/>
     <PersonCard nombre={"Son,"} nombre2={"Goku"} edad={"35"} pelo={"Castaño"}/>
     <PersonCard nombre={"Lord,"} nombre2={"Vader"} edad={"45"} pelo={"Nada"}/>
    </div>
  );
}

export default App;
