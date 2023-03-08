// 메인 화면 헤더
import React from "react";
import styled from "styled-components";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

const StyledHeader = styled.header`
  background-color: #fffdfb;
  height: 10vh;
  min-height: 50px;
  color: black;
  position: fixed;
  width: 100%;
  max-width: 390px;
  max-height: 844px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px 3px 8px 1px rgba(164, 143, 184, 0.15);
`;

const BeddySource = styled.img`
  border-radius: 0;
  margin: 1vh;
  width: 108px;
  height: 32.58px;
`;

const IconDiv = styled.div`
  align-items: center;
  justify-content: space-around;
  width: 20%;
  display: flex;
`;

function MainHeader() {
  const imgClicked = (path) => {
    window.location = `/${path}`;
  };
  return (
    <StyledHeader>
      <BeddySource src="./beddy.png"></BeddySource>
      <IconDiv>
        <HomeIcon
          sx={{ color: "#61689F" }}
          onClick={() => {
            imgClicked("home");
          }}
        />
        <SearchIcon
          sx={{ color: "#61689F" }}
          onClick={() => {
            imgClicked("myprofile");
          }}
        />
      </IconDiv>
    </StyledHeader>
  );
}
export default MainHeader;
