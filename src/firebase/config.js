import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwI6fgSbsCay-wnEafsoQgafal7CVfdgs",
  authDomain: "vue-chat-5d865.firebaseapp.com",
  projectId: "vue-chat-5d865",
  storageBucket: "vue-chat-5d865.appspot.com",
  messagingSenderId: "288950454451",
  appId: "1:288950454451:web:46790f66152f63f87308c6",
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, timestamp, auth }