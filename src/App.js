
import './App.css';
import Header from './Components/Header';
import PersonCard from './Components/PersonCard';
function App() {
  
  return (
    
    <div className="App">
     <PersonCard nombre={"Cristian,"} nombre2={"Andres"} edad={30} pelo={"Negro"}/>
     <PersonCard nombre={"David,"} nombre2={"Hassenford"} edad={50} pelo={"Rojo"}/>
     <PersonCard nombre={"Son,"} nombre2={"Goku"} edad={200} pelo={"Castaño"}/>
     <PersonCard nombre={"Lord,"} nombre2={"Vader"} edad={18} pelo={"Negro"}/>
     <Header></Header>
    </div>
  );
}

export default App;
