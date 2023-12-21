import './App.css';
import Form from './components/Form';

function App() {
  const carList = [
    {
      model: "Tesla",
      hp: 700,
      color: "#ffffff",
    },
    {
      model: "Ford",
      hp: 350,
      color: "#808080",
    },
  ];
  return (
    <div className="App">
        <Form carList={carList} />
    </div>
  );
}

export default App;
