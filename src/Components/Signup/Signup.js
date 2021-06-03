import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Signup.css';
import {FirebaseContext} from '../../Store/FirebaseContext'

export default function Signup() {

  const history = useHistory();
  
  const [ userName, setUserName ] = useState('');
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ password, setPassword ] = useState('')

  const {firebase} = useContext(FirebaseContext)


  const onFormSubmit = (event) =>{
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => userCredential.user.updateProfile({displayName:userName}) 
    .then(()=> firebase.firestore().collection('users').add({
      id: userCredential.user.uid,
      userName: userName,
      phone:phone
    })
    .then(()=>{ 
      history.push('./login')
     })
    ))
    .catch(error=>alert(error.message))
  }
  

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={userName}
            onChange={ (event) => setUserName(event.target.value) }
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={ (event) => setEmail(event.target.value) }
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={ (event) => setPhone(event.target.value) }
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
