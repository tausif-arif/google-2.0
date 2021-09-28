import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import SearchPage from './components/SearchPage';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
    <Switch>
    <Route path="/" exact component={Home}  />
    <Route path="/search" exact component={SearchPage}  />

    </Switch>
    </Router>
    
    </>
  );
}

export default App;
