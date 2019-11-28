import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route component={Homepage} path="/" exact/>
            <Route component={ShopPage} path="/shop" />
            <Route component={SignInAndSignUp} path="/signin" />
        </Switch>
    </div>
  );
}

export default App;
