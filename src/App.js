import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() {
  return (
    <div>
        <Switch>
            <Route component={Homepage} path="/" exact/>
            <Route component={HatsPage} path="/hats" />
        </Switch>
    </div>
  );
}

export default App;
