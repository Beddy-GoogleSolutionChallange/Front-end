//  홈피화면
import React from "react";
import styled from "styled-components";
import BottomNavigationBar from "../components/bottom-navigation-bar";
import MainHeader from "../components/header/main-header";
import CardSlider from "../components/card-slider";
import HomeDiv1 from "../components/div/home-div1";
import HomeDiv2 from "../components/div/home-div2";
import SignOut from "../components/buttons/sign-out";




const HomePage = () => {
  return (
    <>
      <MainHeader />
      <section>
        <main>
          <HomeDiv1 />
          <HomeDiv2 />
          <CardSlider />
          <SignOut />
          <BottomNavigationBar />
        </main>
      </section>
    </>
  );
};

export default HomePage;
