import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDqpfWhilaFbIMCvM3XMPj8O1oyW5PeRqQ",
    authDomain: "fbgogo-2bc40.firebaseapp.com",
    projectId: "fbgogo-2bc40",
    storageBucket: "fbgogo-2bc40.appspot.com",
    messagingSenderId: "1048124884912",
    appId: "1:1048124884912:web:921a05c18e83a11d697875",
    measurementId: "G-YVQ662H1DT"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  auth.languageCode = 'ko';

  export {app , analytics , auth}
