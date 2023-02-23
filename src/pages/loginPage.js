import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { purple } from "@mui/material/colors";

const BgDiv = styled.div`
  background: linear-gradient(144.85deg, #fff7ef 0%, #d7c4e0 99.08%);
  margin: 10% 7.5%;
  padding: 7.5% 0;
  border-radius: 53px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopLine = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  margin: 2vh 0;
  /* font-weight: bold; */
  width: 100%;
`;

const InputLine = styled.input`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  width: 231px;
  height: 34px;
  left: 79px;
  top: 428px;
  margin-top: 1vh;
  padding-left: 5%;
  border: 0;
  border-radius: 19px;
  background: #fffdfb;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.15);
  ::placeholder {
    color: gray;
  }
  :focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  margin-bottom: 1vh;
  width: 185px;
  height: 34px;
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  border: none;
  border-radius: 19px;
  color: white;
  background: #a48fb8;
  box-shadow: 0px 4px 13px 1px rgba(97, 104, 159, 0.15);
  padding: 0;
`;

const SinginLink = styled(Link)`
  font-family: "NanumSquare";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-decoration: none;
  color: #61689f;
`;

const Title = styled.div`
  font-family: NanumSquare;
  font-size: 12px;
  font-weight: 800;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;

  color: #61689f;
`;

const BeddySource = styled.img`
  border-radius: 0;
  margin: 1vh;
  width: 108px;
  height: 32.58px;
`;

const LogoSource = styled.img`
  border-radius: 0;
  margin: 2vh;
  height: 167px;
  width: 87px;
  left: 153px;
  top: 188px;
`;

function LoginPage() {
  return (
    <section>
      <BgDiv>
        <TopLine>
          <ArrowBackIosIcon sx={{ color: purple[200] }} />
          <div></div>
        </TopLine>
        <LogoSource src="./logo.png"></LogoSource>
        <Title>환영해요!</Title>
        <InputContainer>
          <InputLine placeholder="아이디"></InputLine>
          <InputLine placeholder="비밀번호"></InputLine>
        </InputContainer>
        <LoginButton>로그인</LoginButton>
        <SinginLink to="/signin">회원가입</SinginLink>
        <BeddySource src="./beddy.png"></BeddySource>
      </BgDiv>
    </section>
  );
}

export default LoginPage;