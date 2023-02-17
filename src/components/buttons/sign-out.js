// 로그아웃 버튼

import firebase from 'firebase/compat/app';



function SignOut() {
    const auth = firebase.auth();
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

  export default SignOut;