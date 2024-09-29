import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import * as React from 'react';

import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import PersonPinCircleSharpIcon from '@mui/icons-material/PersonPinCircleSharp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const actions = [
    { icon: <PersonPinCircleSharpIcon />, name: 'About', route: '/' },
    { icon: <AssignmentIndSharpIcon  />, name: 'Resume', route: '/resume' },

    { icon: < BackupTableSharpIcon />, name: 'Project', route: '/project' },
    { icon: <CallSharpIcon/>, name: 'Contact', route: '/contact' },
  ];

export default function BasicSpeedDial() {
    const navigate = useNavigate(); // Initialize useNavigate

  return (
   <div className="mobile-view">
    <Box 
    sx={{ 
      transform: 'translateZ(0px)', 
      flexGrow: 1,
      position: 'fixed', // Fixed positioning to keep it on screen
      bottom: 20, // Spacing from bottom
      right: 10, // Spacing from right
      zIndex: 1000 // Ensure it appears above other content
    }}
  >
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ 
        '& .MuiSpeedDialAction-static': { // Style static action items
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Background color for actions
          borderRadius: '5px', // Rounded corners for action items
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Add some shadow
        },
       
      }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => navigate(action.route)} // Navigate to the specified route
          sx={{
            '&:hover': {
              backgroundColor: '#f5f5f5', // Change color on hover
            }
          }}
        />
      ))}
    </SpeedDial>
  </Box>
  </div>

  );
}