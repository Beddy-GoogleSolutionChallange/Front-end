import './App.css';

import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';


import AdbIcon from '@mui/icons-material/Adb';
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MedicationIcon from '@mui/icons-material/Medication';
import SettingsIcon from '@mui/icons-material/Settings';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDq1ykb435s1NUEwGXtVkcPURkQab_HtPc",
  authDomain: "beddy-2e82b.firebaseapp.com",
  projectId: "beddy-2e82b",
  storageBucket: "beddy-2e82b.appspot.com",
  messagingSenderId: "675515444432",
  appId: "1:675515444432:web:d04ecf910c731871ca42d5",
  measurementId: "G-XYWL2RE9PK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Beddy</h1>
        <SearchIcon />
        <HomeIcon />
        <SignOut />
      </header>
      <section>
        {user ? <MainPage /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function MainPage() {


  return (<>

    <main>
      <div className="start">
      <img src={'https://www.freepnglogos.com/uploads/android-logo-png/android-logo-transparent-png-svg-vector-2.png'} />
      <h1>김쿠갓님 반가워요</h1>
      </div>
      <div className="contents">
      </div>
      <BottomAppBar />
      {/* {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span> */}

    </main>

  </>)
}



function BottomAppBar() {
  const [value, setValue] = React.useState(0);
  return (
    <Paper elevation={1}>
      <BottomNavigation sx={{ width: '100%', position: 'absolute', bottom: 0, maxWidth: 728 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        <BottomNavigationAction label="Beddy" icon={<AdbIcon />} />
        <BottomNavigationAction label="Chat" icon={<CommentIcon />} />
        <BottomNavigationAction label="Add" icon={<AddCircleIcon />} />
        <BottomNavigationAction label="Medication" icon={<MedicationIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Paper>);
}


export default App;
