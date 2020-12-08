import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBP6eXAOy5qzgiJ4TZY7kSKzug3qbMBbJw",
    authDomain: "chat-2cbb5.firebaseapp.com",
    databaseURL: "https://chat-2cbb5.firebaseio.com",
    projectId: "chat-2cbb5",
    storageBucket: "chat-2cbb5.appspot.com",
    messagingSenderId: "547353325286",
    appId: "1:547353325286:web:9a7b567fd4a99800409527"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);