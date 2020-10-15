import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAYRYry6GzzKJ49T4vPKHXePeZx4NldmFI",
    authDomain: "darnbook-f6497.firebaseapp.com",
    databaseURL: "https://darnbook-f6497.firebaseio.com",
    projectId: "darnbook-f6497",
    storageBucket: "darnbook-f6497.appspot.com",
    messagingSenderId: "587187061851",
    appId: "1:587187061851:web:3d75679bf017b556bdab7e",
    measurementId: "G-5QKNCV0DP4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;

