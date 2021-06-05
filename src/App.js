import React,{useContext,useEffect,Suspense,lazy} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { AuthContext, FirebaseContext } from './Store/FirebaseContext';

const Home = lazy(() => import( './Pages/Home'));
const SignupPage = lazy(() => import( './Pages/Signup'));
const LoginPage = lazy(() => import( './Pages/Login'));



function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() => { 
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  const loadingStyle = () =>{
    return (
      <div className="wrap">
        <div class="loader">
        </div>
      </div>
    )
  }

  return (
    <div>
      <Router>
        <Suspense fallback={loadingStyle()}>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route path='/signup'>
            <SignupPage/>
          </Route>
          <Route path='/login'>
            <LoginPage/>
          </Route>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
