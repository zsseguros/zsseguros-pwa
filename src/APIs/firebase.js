import * as firebase from "firebase";

let config = {
  apiKey: "AIzaSyBal02eQ2OYxsGQOGw1TxEKjhKSKNBOqow",
  authDomain: "zsseguros-98ba6.firebaseapp.com",
  databaseURL: "https://zsseguros-98ba6.firebaseio.com",
  projectId: "zsseguros-98ba6",
  storageBucket: "zsseguros-98ba6.appspot.com",
  messagingSenderId: "537104631498"
};

firebase.initializeApp(config);

export const fbLogin = (email, psw, next) => {
  console.log(email, psw)
  firebase.auth().signInWithEmailAndPassword(email, psw)
    .then( (success) => {
      next(firebase.auth().currentUser);
    })
    .catch( (error) => {
      next(null);
    });
};