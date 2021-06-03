import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKHGPk8-TMlDgSfLNRJzNlZFSdXB9YWX8",
    authDomain: "olx-clone-c4dcf.firebaseapp.com",
    projectId: "olx-clone-c4dcf",
    storageBucket: "olx-clone-c4dcf.appspot.com",
    messagingSenderId: "25283110808",
    appId: "1:25283110808:web:ccdc6d824b83e68ad82ded",
    measurementId: "G-FH9WJFJBGH"
  };

export default firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();