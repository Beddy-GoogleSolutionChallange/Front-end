//  홈피화면
import React from "react";
import styled from "styled-components";
import BottomNavigationBar from "../components/bottom-navigation-bar";

const BeddySource = styled.img`
  border-radius: 0;
  width: 390px;
  height: 546px;
`;

const ChatPage = () => {
    return (
        <> 
        <BeddySource src="./chat.png"></BeddySource>
        <BottomNavigationBar />
        </>
    );
};

export default ChatPage;