import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { useState, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, addDoc, getFirestore } from "@firebase/firestore";

import MainHeader from "../components/header/main-header";

const BgDiv = styled.div`
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  background: #e5e5e5;
  padding: 10px;
  margin: 10vh 0 10vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 94%;
  height: 100vh;
`;
const Letter = styled.div`
  vertical-align: top;
  font-size: 12px;
  font-family: NanumSquare;
  line-height: 148.00000190734863%;
  color: #121212;
`;
const Message = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => (props.object === "me" ? "#d7c4e0" : "#FFF7EF")};
  align-self: ${(props) => (props.object === "me" ? "flex-end" : "flex-start")};
  flex-direction: ${(props) => (props.object === "me" ? "row-reverse" : "row")};
  border-radius: 37px;
  margin: 10px;
  padding: ${(props) =>
    props.object === "me" ? "5px 0 5px 10px" : "5px 10px 5px 0"};
`;
const Input = styled.input`
  border-radius: 19px;
  height: 29px;
  width: 284px;
  background-color: #fffcfa;
  border: 1px solid #d7c4e0;
`;

const Form = styled.form`
  height: 105px;
  width: 390px;
  background-color: #fffcfa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2px 5px;
`;
const SendButton = styled.button``;
const SendImg = styled.img`
  height: 26px;
  width: 30px;
`;
const AddButton = styled.img`
  height: 10px;
  width: 10px;
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

function ChattingPage() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "desc").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };
  return (
    <BgDiv>
      <MainHeader />
      <Main>
        {messages &&
          messages
            .slice(0)
            .reverse()
            .map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </Main>
      <Form onSubmit={sendMessage}>
        <AddButton src="./add-button.png" />
        <Input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />
        <SendButton type="submit" disabled={!formValue}>
          <SendImg src="./send.png" />
        </SendButton>
      </Form>
    </BgDiv>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid == auth.currentUser.uid ? "me" : "received";

  return (
    <>
      <Message object={messageClass}>
        <Img
          src={
            photoURL ||
            "https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2"
          }
        />
        <Letter object={messageClass}>{text}</Letter>
      </Message>
    </>
  );
}

export default ChattingPage;
