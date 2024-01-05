import './App.css';
import LandingPage from './components/LandingPage';
import Create from './components/Create';
import ShowOne from './components/ShowOne';
import Update from './components/Update';
import {Routes , Route, Navigate} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/manger/create'/>}/>
        <Route path='/manger/create' element={<Create/>}/>
        <Route path='/manager/:id' element={<ShowOne/>}/>
        <Route path='/manager/:id/update' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
