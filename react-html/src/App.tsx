import React from 'react';
import './style.css';
import './dev-style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Innerpage from './pages/Innerpage';

class App extends React.Component {
  render() {
    return (
      <>
        <Router basename="/anil/Team-work/June-2021/Bhavin/mp-theme-22-react-material">
          <Route path='/login' exact component={Login} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/innerpage' exact component={Innerpage} />
          <Route path='/' exact component={Login} />
        </Router>
      </>
    );
  };
};
export default App;