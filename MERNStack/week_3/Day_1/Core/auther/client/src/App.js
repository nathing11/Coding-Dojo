import './App.css';
import LandingPage from './components/LandingPage';
import ShowOne from './components/ShowOne';
import Update from './components/Update';
import Create from './components/Create'
import {Routes , Route} from "react-router-dom"
function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auther/create' element={<Create/>}/>
        <Route path='/auther/:id' element={<ShowOne/>}/>
        <Route path='/auther/:id/update' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
