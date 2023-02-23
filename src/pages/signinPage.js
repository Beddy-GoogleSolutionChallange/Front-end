import React, { useState } from 'react';
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { purple } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth';
// 파이어베이서 파일에서 import 해온 db
import { app } from '../App'
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, addDoc, getFirestore } from "@firebase/firestore";

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

const InputContainer = styled.div`
  margin-top: 3vh;
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

const CompleteButton = styled.button`
  margin-top: 2vh;
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

const TopLine = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
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
  height: 134px;
  width: 69.67px;
  left: 133px;
  top: 388px;
`;
const StyledDiv = styled.div`
  font-family: NanumSquare;
  font-size: 16px;
  font-weight: 800;

  text-align: center;
  color: #a48fb8;
`;

function SigninPage() {




  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();


  const db = getFirestore(app);
 


  const registerUserInDB = async () => {
    const uid = auth.currentUser.uid;
    await addDoc(collection(db, "users"), { nickname: nickname, email: email, uid: uid });
  }


  const isPasswordConfirmed = (password, confirmPassword) => {
    if (password && confirmPassword && password === confirmPassword) return true;
    return false;
  }
  const isEmpty = (nickname, email, password) => {
    if (nickname.isEmpty || email.isEmpty || password.isEmpty) return true;
    return false;
  }

  const signUp = async (e) => {
    e.preventDefault()
    if (!isPasswordConfirmed(password, confirmPassword) || isEmpty(nickname, email, password)) {
      // 유저한테 무엇이 잘못되었는지 showdialog해서 보여주어야 함(나중에 만들기)
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          registerUserInDB();
          navigate("/home")
          // ...
        });

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    };

  }
  return (
    <section>
      <BgDiv>
        <TopLine>
          <Link to="/">
            <ArrowBackIosIcon sx={{ color: purple[200] }} />
          </Link>
          <StyledDiv>회원가입</StyledDiv>
        </TopLine>
        <LogoSource src="./logo.png"></LogoSource>
        <Title>반가워요! 당신을 알고 싶어요!</Title>
        <InputContainer>
          <InputLine value={nickname || ""} label="Your nickname" onChange={(e) => setNickname(e.target.value)} placeholder="별명"></InputLine>
          <InputLine type="email" value={email || ""} label="Email address" onChange={(e) => setEmail(e.target.value)} placeholder="이메일"></InputLine>
          <InputLine type="password" value={password || ""} label="Create password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"></InputLine>
          <InputLine type="password" value={confirmPassword || ""} label="rewrite password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="비밀번호 확인"></InputLine>
        </InputContainer>
        <CompleteButton onClick={signUp}>가입하기</CompleteButton>
        <BeddySource src="./beddy.png"></BeddySource>
      </BgDiv>
    </section>
  );
}

export default SigninPage;
