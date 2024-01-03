import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main';
import OP from './OP';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Main />
      <Router>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/OP" component={OP} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;