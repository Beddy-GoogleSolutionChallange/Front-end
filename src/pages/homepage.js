import React from "react";
import SignOut from "../components/buttons/sign-out";

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BottomNavigationBar from "../components/bottom-navigation-bar";



const HomePage = () => {
  return (
    <>
    <header className="App-header">
        <h1>Beddy</h1>
        <SearchIcon />
        <HomeIcon />
        <SignOut />
      </header>
      <section>
  <main>
    <div className="start">
    <img src={'https://www.freepnglogos.com/uploads/android-logo-png/android-logo-transparent-png-svg-vector-2.png'} />
    <h1>김쿠갓님 반가워요</h1>
    </div>
    <div className="contents">
    </div>
    <BottomNavigationBar />
  </main>
  </section>
    </>
  );
};




  

export default HomePage;