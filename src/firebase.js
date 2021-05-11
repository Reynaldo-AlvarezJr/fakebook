import firebase from "firebase";

// config
const firebaseConfig = {
  apiKey: "AIzaSyC_Z8ecYY7ECYVZu8Phmpv94NWzst1WPnk",
  authDomain: "fakebook-9d159.firebaseapp.com",
  databaseURL: "https://fakebook-9d159.firebaseio.com",
  projectId: "fakebook-9d159",
  storageBucket: "fakebook-9d159.appspot.com",
  messagingSenderId: "469627240560",
  appId: "1:469627240560:web:00034520397681a2b974b5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;