import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  // your Firebase project configuration
  apiKey: "AIzaSyAiKbVJ1jzzYEFmCCbWzPXwtiASb64Ps2Q",
  authDomain: "hidrokform.firebaseapp.com",
  databaseURL: "https://hidrokform-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hidrokform",
  storageBucket: "hidrokform.appspot.com",
  messagingSenderId: "958303329661",
  appId: "1:958303329661:web:8d022b6a99dc22b271c014",
  measurementId: "G-HWZGFFWZL7"
}


const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
