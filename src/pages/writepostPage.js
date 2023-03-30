//  홈피화면
import React from "react";
import styled from "styled-components";
import BottomNavigationBar from "../components/bottom-navigation-bar";

const BeddySource = styled.img`
  border-radius: 0;
  width: 390px;
  height: 600px;
`;

const WritePostPage = () => {
    return (
        <> 
        <BeddySource src="./write_post.png"></BeddySource>
        <BottomNavigationBar />
        </>
    );
};

export default WritePostPage;
