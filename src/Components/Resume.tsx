import * as React from 'react';
import '../Styles/Resume.css';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Button } from '@mui/material';
import myResume from '../Assets/Patrick Hart - Resume.pdf'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Resume() {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(!toggle)
  }

  return (
    <div>
      { toggle ?
      <>
        <Box textAlign="center">
          <Button onClick={handleClick}>Hide Resume</Button>
        </Box>
        <Box 
            sx={{ flexGrow: 1 }}
            style={{ padding: '1vh'}}
        >
          <Grid container spacing={1}>
            <Grid item xs>
                <Item>
                  <iframe
                      title="Resume"
                      src={ `${myResume}#view=FitH` }
                  />
                </Item>
            </Grid>
          </Grid>
        </Box>
      </>
      :
      <>
        <Box textAlign="center">
          <Button onClick={handleClick}>View Resume</Button>
        </Box>
        <br></br>
        <br></br>
      </>
    }
    </div>
  );
};
