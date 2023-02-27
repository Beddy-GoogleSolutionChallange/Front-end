// 인증화면
import React from "react";
import firebase from "firebase/compat/app";
import AuthHeader from "../components/header/auth-header";
import styled from "styled-components";
const AuthPage = () => {
  const auth = firebase.auth();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #FFFDFB;
  `;
  return (
    <>
      <AuthHeader />
      <Section>
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <p>
          Do not violate the community guidelines or you will be banned for
          life!
        </p>
      </Section>
    </>
  );
};

export default AuthPage;
