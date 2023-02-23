import React from "react";
import styled from "styled-components";

const BgDiv = styled.div`
  background: linear-gradient(144.85deg, #fff7ef 0%, #d7c4e0 99.08%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; //화면 꽉차게
`;

const Title = styled.div`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;
  text-align: center;

  color: #61689f;
`;
const BeddySource = styled.img`
  border-radius: 0;
  margin: 1vh;
  width: 248px;
  height: 75px;
`;

const LogoSource = styled.img`
  border-radius: 0;
  margin-top: 7.5vh;
  height: 237px;
  width: 123px;
  left: 133px;
  top: 388px;
`;

function LoadingPage() {
  return (
    <BgDiv>
      <Title>마약 중독 치료를 위한 친구,</Title>
      <BeddySource src="./beddy.png"></BeddySource>
      <LogoSource src="./logo.png"></LogoSource>
    </BgDiv>
  );
}

export default LoadingPage;
