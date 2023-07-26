import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDMFuTeWNxKbpBGLIUu7J2-wXZ3WxzOMvk",
    authDomain: "moebasim-lol.firebaseapp.com",
    projectId: "moebasim-lol",
    storageBucket: "moebasim-lol.appspot.com",
    messagingSenderId: "351159541293",
    appId: "1:351159541293:web:7fa56faf1f47e8efb7a2a4",
    measurementId: "G-B9V2C54VNH"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init services
  const projectFirestore = firebase.firestore();

  export { projectFirestore }