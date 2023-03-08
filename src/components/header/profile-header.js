// 메인 화면 헤더
import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const StyledHeader = styled.header`
  background-color: #fffdfb;
  height: 10vh;
  min-height: 50px;
  color: black;
  position: fixed;
  width: 100%;
  max-width: 390px;
  max-height: 844px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px 3px 8px 1px rgba(164, 143, 184, 0.15);
`;

const IconDiv = styled.div`
  align-items: center;
  justify-content: space-around;
  width: 20%;
  display: flex;
`;
const TitleDiv = styled.div`
  font-family: NanumSquare;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #61689f;
`;

const firebaseConfig = {
  apiKey: "AIzaSyDq1ykb435s1NUEwGXtVkcPURkQab_HtPc",
  authDomain: "beddy-2e82b.firebaseapp.com",
  projectId: "beddy-2e82b",
  storageBucket: "beddy-2e82b.appspot.com",
  messagingSenderId: "675515444432",
  appId: "1:675515444432:web:d04ecf910c731871ca42d5",
  measurementId: "G-XYWL2RE9PK",
};

firebase.initializeApp(firebaseConfig);
const auth = getAuth();

function ProfileHeader() {
  const imgClicked = () => {
    window.location = `/home`;
  };
  const [nickname, setNickname] = useState("");
  auth.onAuthStateChanged(() => {
    auth.currentUser.displayName === null
      ? setNickname("이름을 설정하세요")
      : setNickname(auth.currentUser.displayName);
  });

  return (
    <StyledHeader>
      <Link to="/home">
        <ArrowBackIosIcon sx={{ color: "#A48FB8" }} />
      </Link>
      <TitleDiv>{nickname} 님의 공간</TitleDiv>
      <IconDiv>
        <HomeIcon sx={{ color: "#61689F" }} onClick={imgClicked} />
        <SearchIcon sx={{ color: "#61689F" }} />
      </IconDiv>
    </StyledHeader>
  );
}
export default ProfileHeader;
