import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD11SZPFAlbh0Tei6Y0mBatJ2pa-LK4tTA",
  authDomain: "ciclista-eletronico-f1c66.firebaseapp.com",
  projectId: "ciclista-eletronico-f1c66",
  storageBucket: "ciclista-eletronico-f1c66.appspot.com",
  messagingSenderId: "898878999840",
  appId: "1:898878999840:web:3e97306dd9552e69839b45"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
