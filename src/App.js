import Navbar from './Navbar';
import Home from './Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import Create from './create';
import UserDetails from './userdetails';


function App() {
  // const title = 
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className="content" > </div> 
    <Switch >
    <Route exact path="/" >
    <Home />
    </Route>
    <Route path="/create">
    <Create />
    </Route>
    <Route path="/users/:id">
    <UserDetails />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
