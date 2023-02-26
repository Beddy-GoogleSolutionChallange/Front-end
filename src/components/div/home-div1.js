// 추천 멘토/ 상담사, 모두 보기 가로 정렬
import { Icon } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { collection, getFirestore } from "@firebase/firestore";

const StyledWordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const IconSource = styled.img`
  width: 47px;
  height: 47px;
`;

function HomeDiv1() {
  const [nickname, setNickname] = useState("로그인하세요");

  return (
    <StyledWordsContainer>
      <IconSource src="./bottom-icon1.png" />
      <span>{nickname}</span>
      <span>님 반가워요.</span>
    </StyledWordsContainer>
  );
}
export default HomeDiv1;
