import './App.css';
import { useState } from 'react';
import Btn from './components/Btn';
import List from './components/List';
function App() {
  const [posts, setPost] = useState("");
  return (
    <div className="App">
      <Btn setPost={setPost}/>
      <List posts={posts}/>
    </div>
  );
}
export default App;
