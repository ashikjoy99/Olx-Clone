import React,{useContext,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import { AuthContext, FirebaseContext } from './Store/FirebaseContext';

function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() => { 
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  

  return (
    <div>
      <Router>
        <Route exact path='/'>
         <Home />
        </Route>
        <Route path='/signup'>
          <SignupPage/>
        </Route>
        <Route path='/login'>
          <LoginPage/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
