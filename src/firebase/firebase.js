
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJZPyeVpcyNNz9g7qQfpnW-xElhps6Rl4",
    authDomain: "blogdatabase-a62bf.firebaseapp.com",
    projectId: "blogdatabase-a62bf",
    storageBucket: "blogdatabase-a62bf.appspot.com",
    messagingSenderId: "527551787059",
    appId: "1:527551787059:web:68b45df4aca49941277346"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();
