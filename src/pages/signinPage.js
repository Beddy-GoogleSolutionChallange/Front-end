import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// 파이어베이서 파일에서 import 해온 db
import { app } from "../App";
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
const ErrorDiv = styled.div`
  color: #61689f;
`;

function SigninPage() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errormessage, setErrormessage] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  const db = getFirestore(app);

  function mapAuthCodeToMessage(authCode) {
    switch (authCode) {
      case "auth/email-already-in-use":
        return "이미 사용중인 이메일이에요.";

      case "auth/invalid-email":
        return "이메일 형식이 맞지 않습니다.";

      case "auth/weak-password":
        return "비밀번호가 취약합니다.";
      // Many more authCode mapping here...
      case "auth/is-empty":
        return "빈칸을 채워주세요.";
      case "auth/password-not-confirmed":
        return "비밀번호가 일치하지 않습니다.";
      default:
        return "";
    }
  }

  const registerUserInDB = async () => {
    const uid = auth.currentUser.uid;
    await addDoc(collection(db, "users"), {
      nickname: nickname,
      email: email,
      uid: uid,
    });
  };

  const isPasswordConfirmed = (password, confirmPassword) => {
    if (password === confirmPassword)
      return true;
    return false;
  };
  const isEmpty = (nickname, email, password, confirmPassword) => {
    if (nickname === '' || email === '' || password === '' || confirmPassword === '') return true;
    return false;
  };

  const signUp = async (e) => {
    e.preventDefault();
    if (
      isEmpty(nickname, email, password, confirmPassword)
    ) {
      const errorCode = 'auth/is-empty';
      console.log(errorCode);
      setErrormessage(mapAuthCodeToMessage(errorCode));
      return;
    }
    if (
      !isPasswordConfirmed(password, confirmPassword)
    ) {
      const errorCode = 'auth/password-not-confirmed';
      console.log(errorCode);
      setErrormessage(mapAuthCodeToMessage(errorCode));
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          console.log(nickname);
          console.log(email);
          console.log(password);
          console.log(confirmPassword);
          registerUserInDB();
          navigate("/home");
          // ...
        }
      );
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      setErrormessage(mapAuthCodeToMessage(errorCode));
      console.log(errormessage);
      // ..
    }
  };
  return (
    <section>
      <BgDiv>
        <TopLine>
          <Link to="/">
            <ArrowBackIosIcon sx={{ color: "#A48FB8" }} />
          </Link>
          <StyledDiv>회원가입</StyledDiv>
        </TopLine>
        <LogoSource src="./logo.png"></LogoSource>
        <Title>반가워요! 당신을 알고 싶어요!</Title>
        <InputContainer>
          <InputLine
            value={nickname || ""}
            label="Your nickname"
            onChange={(e) => setNickname(e.target.value)}
            placeholder="별명"
          ></InputLine>
          <InputLine
            type="email"
            value={email || ""}
            label="Email address"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
          ></InputLine>
          <InputLine
            type="password"
            value={password || ""}
            label="Create password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          ></InputLine>
          <InputLine
            type="password"
            value={confirmPassword || ""}
            label="rewrite password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호 확인"
          ></InputLine>
          <ErrorDiv>{errormessage}</ErrorDiv>
        </InputContainer>
        <CompleteButton onClick={signUp}>가입하기</CompleteButton>
        <BeddySource src="./beddy.png"></BeddySource>
      </BgDiv>
    </section>
  );
}

export default SigninPage;
