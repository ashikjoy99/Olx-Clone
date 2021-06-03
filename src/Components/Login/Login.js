import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../../Store/FirebaseContext';
import {useHistory} from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';
import GoogleLogo from '../../google-btn.svg'


function Login() {
  const {firebase,provider} = useContext(FirebaseContext)
  
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const history = useHistory();

  const onLogin = (event) =>{
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    history.push('/')
  }).catch((err)=>{
    alert(err.message)
  })
  }

  
  const onGoogleSignIn = (event)=>{
    event.preventDefault();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      history.push('/')
    }).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
  });
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={onLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <div className="google">
          <button onClick={onGoogleSignIn}>
            <img width="50px" height="35px" src={GoogleLogo} alt='logo'></img>
            SignIn with Google
          </button>
        </div>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
