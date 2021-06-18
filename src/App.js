import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/navbar";
import Home from './pages/home'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route  exact path='/' component={ Home }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
