import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';

export default function Footer() {

  return (
    <Box>
        <BottomNavigation
        style={{ 
            background: 'rgb(155, 218, 249)', 
            position: 'fixed', 
            bottom: '0', 
            width: '100%' 
        }}
        >
      </BottomNavigation>
    </Box>
  );
};