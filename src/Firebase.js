// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import 'firebase/compat/auth'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXIOOC02Xx47z8Wob5TWZXcMnun1Eyo8Y",
  authDomain: "you-tube-clone-2b072.firebaseapp.com",
  projectId: "you-tube-clone-2b072",
  storageBucket: "you-tube-clone-2b072.appspot.com",
  messagingSenderId: "226967890169",
  appId: "1:226967890169:web:5ced0cd1d2bd37130b1a28"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




export  const auth = firebase.auth();

export const provider  = new GoogleAuthProvider();
export const signInWithGoogle = async () =>{
  
  await signInWithPopup(auth,provider)
  .then(()=>{
    console.log("Successfully logIn");
  })
  .catch((e)=>{
    console.log(e);
  })
}

export  const firestore = firebase.firestore();
