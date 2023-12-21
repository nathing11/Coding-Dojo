import './App.css';

import Together from './components/Together'
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
  return (
      <div className="App">
          <Together prop1={value1} />
          <Together prop1={value2} />
      </div>  
  );
} 

export default App;
