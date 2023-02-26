// 인증 화면 헤더
import React from "react";
import styled from "styled-components";

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
`;

function AuthHeader() {
  return (
    <StyledHeader>
      <h1>Beddy</h1>
    </StyledHeader>
  );
}
export default AuthHeader;
