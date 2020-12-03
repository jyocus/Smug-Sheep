import './App.css';
import SignUp from './pages/index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from './pages/Blog';
import { useHistory } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
// import { Test } from './components/Test';


function App() {

  return (
    <Router>
      <div className="App">
        {/* <SignUp /> */}
        {/* <Route path="/" component={SignUp} />
        <Route path="/blog" component={Blog} /> */}

        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/blog" component={Blog} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
