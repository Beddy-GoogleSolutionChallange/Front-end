import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, addDoc, getFirestore } from "@firebase/firestore";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import MainHeader from "../components/header/main-header";
import BottomNavigationBar from "../components/bottom-navigation-bar";

const BgDiv = styled.div`
  background: #fffdfb;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Main = styled.div`
  background: #fffdfb;
  margin: 10vh 0 10vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10% 0;
  width: 80%;
`;

const ProfileImg = styled.div`
  border-radius: 85px;
  background-size: cover;
  margin: 0 10%;
  text-align: center;
  width: 90px;
  height: 90px;
  background-image: url("./bottom-icon1.png");
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
`;

const ProfileNameContainer = styled.div`
  text-align: left;
`;

const ProfileDate = styled.div`
  text-align: center;
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #61689f;
  width: 65px;
  height: 29.33px;
  line-height: 29.33px;
  background: linear-gradient(144.85deg, #fff7ef 0%, #d7c4e0 99.08%);
  border-radius: 18.5px;
  margin-bottom: 10%;
`;
const ProfileMessage = styled.div`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 10%;
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-auto-rows: minmax(175px, auto);
  grid-gap: 20px;

  text-align: center;
  width: 80%;
  flex-wrap: wrap;
`;

const items = [
  { id: 1, url: "https://picsum.photos/200/300" },
  { id: 2, url: "https://picsum.photos/600/500" },
  { id: 3, url: "https://picsum.photos/700/600" },
  { id: 4, url: "https://picsum.photos/500/400" },
  { id: 5, url: "https://picsum.photos/200/300" },
  { id: 6, url: "https://picsum.photos/800/700" },
  { id: 7, url: "https://picsum.photos/300/400" },
];

const Card = styled.img`
  width: 154px;
  height: 175.84px;
  cursor: pointer;
  border-radius: 23px;
  box-shadow: inset 0px 4px 13px rgba(0, 0, 0, 0.1);
  background: #d7c4e0;
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
const auth = firebase.auth();
const firestore = firebase.firestore();
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

function ProfilePage() {
  return (
    <BgDiv>
      <MainHeader />
      <Main>
        <ProfileContainer>
          <ProfileImg />
          <ProfileNameContainer>
            <ProfileDate>198일</ProfileDate>
            <ProfileMessage>오히려 좋아~ 가보자고~</ProfileMessage>
            <div>
              <FavoriteBorderIcon sx={`color:purple`} />
              <span>100</span>
              <BookmarkIcon sx={`color:purple`} />
              <span>100</span>
            </div>
          </ProfileNameContainer>
        </ProfileContainer>
        <CardBox>
          {items.map((item) => {
            return <Card src={item.url} />;
          })}
        </CardBox>
      </Main>
      <BottomNavigationBar />
    </BgDiv>
  );
}

export default ProfilePage;
