import "./App.css";
import HomePage from "./pages/homepage";
import AuthPage from "./pages/authpage";
import LoadingPage from "./pages/loadingPage";
import SigninPage from "./pages/signinPage";
import LoginPage from "./pages/loginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
export const app = firebase.initializeApp(firebaseConfig);
