import './App.css';
import './App.less';
import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import asyncComponent from 'common/asyncComponent';
const Home = asyncComponent(() => import('./components/home'));

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      < div className='app' >
        <div>
          <Router>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </div >
    );
  }
}

export default App;
