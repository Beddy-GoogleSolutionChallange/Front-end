import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDq1ykb435s1NUEwGXtVkcPURkQab_HtPc",
    authDomain: "beddy-2e82b.firebaseapp.com",
    projectId: "beddy-2e82b",
    storageBucket: "beddy-2e82b.appspot.com",
    messagingSenderId: "675515444432",
    appId: "1:675515444432:web:d04ecf910c731871ca42d5",
    measurementId: "G-XYWL2RE9PK",
  };

const app = firebase.initializeApp(firebaseConfig);
export const firebase_db = firebase.database();