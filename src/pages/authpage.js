// 인증화면

import React from "react";
import firebase from 'firebase/compat/app';
import AuthHeader from "../components/header/auth-header";

const AuthPage = () => {
  const auth = firebase.auth();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
  
  return (
    <>
      <AuthHeader />
      <section>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </section>
    </>
  )

}

export default AuthPage;