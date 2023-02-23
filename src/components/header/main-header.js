// 메인 화면 헤더

import React from "react";
import styled from "styled-components";

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';



const StyledHeader = styled.header`
background-color: #FFFDFB;
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

function MainHeader() {

    return (<StyledHeader>
        <h1>Beddy</h1>
        <SearchIcon />
        <HomeIcon />
    
    </StyledHeader>);
}
export default MainHeader;