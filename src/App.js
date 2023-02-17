import "./App.css";
import HomePage from "./pages/homepage";
import AuthPage from "./pages/authpage";

import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq1ykb435s1NUEwGXtVkcPURkQab_HtPc",
  authDomain: "beddy-2e82b.firebaseapp.com",
  projectId: "beddy-2e82b",
  storageBucket: "beddy-2e82b.appspot.com",
  messagingSenderId: "675515444432",
  appId: "1:675515444432:web:d04ecf910c731871ca42d5",
  measurementId: "G-XYWL2RE9PK",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? <Navigate replace to="/auth" /> : <Navigate replace to="/" />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
