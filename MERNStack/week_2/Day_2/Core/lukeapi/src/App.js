import {Routes,Route} from "react-router-dom";
import Form from './components/Form';
import DisplayPeople from './components/DisplayPeople';
import './App.css';
function App() {
  return (
    <div className="App">
      <Form />
        <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/:selected/:Id" element={<DisplayPeople />} />
        </Routes>
    </div>
  );
}
export default App;
