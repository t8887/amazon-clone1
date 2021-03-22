import React , { useEffect }from 'react';
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Checkout from "./Checkout.js"
import Login from './Login.js';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
    
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('this user is >>>> ',authUser);
      
      if(authUser) {
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else {
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])

      return (
        <Router>
        <div className="App">
          <Switch>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
            <Header />
              <Checkout />
            </Route>

            <Route>
            <Header />
              <Home />
            </Route>
          </Switch>
          
        </div>
        </Router>
      );
}

export default App;
