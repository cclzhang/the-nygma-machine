import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_lxBUM-I1-bPc4WAwui19qntw8KEwRpk",
  authDomain: "the-nygma-machine.firebaseapp.com",
  databaseURL: "https://the-nygma-machine.firebaseio.com",
  projectId: "the-nygma-machine",
  storageBucket: "the-nygma-machine.appspot.com",
  messagingSenderId: "65341749977",
  appId: "1:65341749977:web:d70680cc0769cdcde65cc8",
  measurementId: "G-63V9W471RD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;