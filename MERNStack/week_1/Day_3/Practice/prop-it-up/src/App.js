import './App.css';
import Proputup from './components/Proputup';

function App() {

  const value1={
    firstName:'Jane',
    lastName:'Doe',
    age:45,
    hairColor:'Black'
  }
  const value2={
    firstName:'John',
    lastName:'Smith',
    age:88,
    hairColor:'Brown'
  }
  const value3={
    firstName:'Millard',
    lastName:'Fillmore',
    age:50,
    hairColor:'Brown'
  }
  return (
      <div className="App">
          <Proputup prop1={ value1 } />
          <Proputup prop1={ value2 } />
          <Proputup prop1={ value3 } />
      </div>
  );
}
export default App;
