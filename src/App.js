import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import Checkout from './Checkout'
import Login from './Login'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navlinks from './Navlinks';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";


function App() {

  const [{loggedInUser}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) =>{
      if(userauth){
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      }else{
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }

  },[])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Navlinks />
            <Home />
            <Footer />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
