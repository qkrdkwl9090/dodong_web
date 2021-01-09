import Header from './Component/Header.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Intro from './Pages/Intro.js';
import Skill from './Pages/Skill.js';

function App() {
  return (
    <>
      <Header/>
      <>
        <Router>
          <Route exact path="/" component = {Home}/>
          <Route path="/Intro" component = {Intro}/>
          <Route path="/Skill" component = {Skill}/>

        </Router>
      </>

    </>


  );
}

export default App;
