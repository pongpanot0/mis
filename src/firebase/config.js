
import firebase  from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 const setting ={timestampInSnapshots : true}
 var firebaseConfig = {
    apiKey: "AIzaSyBDyUh_b6ltJAfJsj_ZX9ipz-rRQLV8EHk",
    authDomain: "qpmcrud.firebaseapp.com",
    projectId: "qpmcrud",
    storageBucket: "qpmcrud.appspot.com",
    messagingSenderId: "382134284384",
    appId: "1:382134284384:web:55eb87a8f626bdd95bd305",
    measurementId: "G-8G5S39DLG5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(setting);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 
  export { projectStorage, projectFirestore, timestamp ,setting ,firebase };