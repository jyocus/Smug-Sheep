import logo from './logo.svg';
import './App.css';
import SignUp from './pages/index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Test } from './components/Test';


function App() {
  return (
    <div className="App">
      <SignUp />
      
    </div>
  );
}

export default App;
