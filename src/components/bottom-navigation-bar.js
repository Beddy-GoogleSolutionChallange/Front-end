// 바텀네비게이션 바-> 나중에 화면 이동 기능 구현 필요
import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import styled from "styled-components";

const ImgSource = styled.img`
  width: 30px;
  height: 31px;
`;

function BottomNavigationBar() {
  const [value, setValue] = React.useState(0);
  return (
    <Paper elevation={1}>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          maxWidth: 390,
          background: "#FFFDFB",
          boxShadow: "0px -4px 13px 1px rgba(238, 187, 204, 0.15)",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          iconOnly
          icon={<ImgSource src="./bottom-icon1.png" />}
        />
        <BottomNavigationAction
          iconOnly
          icon={<ImgSource src="./bottom-icon2.png" />}
        />
        <BottomNavigationAction label="Add" icon={<AddCircleIcon />} />
        <BottomNavigationAction
          iconOnly
          icon={<ImgSource src="./bottom-icon3.png" />}
        />
        <BottomNavigationAction
          iconOnly
          icon={<ImgSource src="./bottom-icon4.png" />}
        />
      </BottomNavigation>
    </Paper>
  );
}
export default BottomNavigationBar;
