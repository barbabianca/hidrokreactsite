import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  // your Firebase project configuration
  apiKey: "AIzaSyB3ER7re6zEpQ4G_8B3WtuFa34csvpza48",
  authDomain: "hidrokcontactform.firebaseapp.com",
  databaseURL: "https://hidrokcontactform-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hidrokcontactform",
  storageBucket: "hidrokcontactform.appspot.com",
  messagingSenderId: "313016218461",
  appId: "1:313016218461:web:13276b3dde72f130452eb4",
  measurementId: "G-9J60CZX1KF"
}


const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
