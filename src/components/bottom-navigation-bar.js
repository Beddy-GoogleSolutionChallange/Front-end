// 바텀네비게이션 바-> 나중에 화면 이동 기능 구현 필요

import React from "react";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';


import AdbIcon from '@mui/icons-material/Adb';
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MedicationIcon from '@mui/icons-material/Medication';
import SettingsIcon from '@mui/icons-material/Settings';


function BottomNavigationBar() {
    const [value, setValue] = React.useState(0);
    return (
      <Paper elevation={1}>
        <BottomNavigation sx={{ width: '100%', position: 'absolute', bottom: 0, maxWidth: 390 }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Beddy" icon={<AdbIcon />} />
          <BottomNavigationAction label="Chat" icon={<CommentIcon />} />
          <BottomNavigationAction label="Add" icon={<AddCircleIcon />} />
          <BottomNavigationAction label="Medication" icon={<MedicationIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>);
  }
  export default BottomNavigationBar;