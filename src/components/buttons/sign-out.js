// 로그아웃 버튼

import firebase from 'firebase/compat/app';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      console.log("Signed out successfully")
    }).catch((error) => {
      // An error happened.
    });
  }
  const auth = firebase.auth();
  return (
    <button className="sign-out" onClick={handleLogout}>Sign Out</button>
  )
}

export default SignOut;