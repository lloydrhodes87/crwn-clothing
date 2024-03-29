import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            }
            this.setState({
                currentUser: userAuth
            })

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route component={Homepage} path="/" exact/>
                    <Route component={ShopPage} path="/shop" />
                    <Route component={SignInAndSignUp} path="/signin" />
                </Switch>
            </div>
        );
    }
}

export default App;
