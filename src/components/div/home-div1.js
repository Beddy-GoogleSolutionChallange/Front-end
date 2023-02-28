// 추천 멘토/ 상담사, 모두 보기 가로 정렬
import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

const StyledWordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const IconSource = styled.img`
  width: 47px;
  height: 47px;
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

function HomeDiv1() {
  const [nickname, setNickname] = useState("");
  auth.onAuthStateChanged(() => {
    auth.currentUser.displayName === null
      ? setNickname("이름을 설정하세요")
      : setNickname(auth.currentUser.displayName);
  });
  return (
    <StyledWordsContainer>
      <IconSource src="./bottom-icon1.png" />
      <span>{nickname}</span>
      <span>님 반가워요.</span>
    </StyledWordsContainer>
  );
}
export default HomeDiv1;
