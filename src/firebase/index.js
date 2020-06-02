import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArCDjg0TQmMVh6TF92LRq1_n0aa5uA0CU",
  authDomain: "shoop-9e756.firebaseapp.com",
  databaseURL: "https://shoop-9e756.firebaseio.com",
  projectId: "shoop-9e756",
  storageBucket: "shoop-9e756.appspot.com",
  messagingSenderId: "1015918024973",
  appId: "1:1015918024973:web:1d9ffb034d55a13597b844"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage();
