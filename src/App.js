import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import './App.css';
import { useStateValue } from "./stateProvider";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe ("pk_test_51IkD37EJZp72i8DnZNml7zmnMUYezWVMqDdVjYlADFE3W7ooGriP9lX6NkzRIKwNAL8DxBdOScF9LLYqrwjtYUyV00QgdXSqFo");

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  console.log("user currently is:",user);

  return (
    <Router>    
    <div className="app">
      <Switch>
      <Route path="/orders">
            <Header />
            <Orders />
      </Route>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>
      
      <Route path="/login">
        
        <Login />
      </Route>
      <Route path='/payment'>
        <Header />
        <Elements stripe={promise}>
           <Payment />
        </Elements>
    
      </Route>
      <Route path="/">
        <Header />
        <Home />
   

      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
