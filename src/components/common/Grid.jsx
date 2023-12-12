import  React, {useState} from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { makeStyles } from '@mui/styles';
import { People } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '2px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(2),
  borderRadius: '4px',
  height: 150,
  width: 150,
  textAlign: 'center'
}));


const useStyles = makeStyles((theme) => ({

  gradientBackground0: {
    background: 'linear-gradient(45deg, #88f7eda8 40%, #ffffff);',
  },
  gradientBackground1: {
    background: 'linear-gradient(45deg, #f7ee88a8 40%, #fff);',
    // Add other styles as needed
  },
  gradientBackground2: {
    background: 'linear-gradient(45deg, #c7f788a8 40%, #fff);',
  },
  iconBackground1: {
    background: 'linear-gradient(45deg, #8891f7a8 40%, #fff);',
  },
}));

const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: 0,
  width: '3rem',
  height: '3rem',
};

export default function GridCard() {
  const classes = useStyles();
  let navigate = useNavigate();

 const [ cardArr, setCardArr]  = useState([{'name' : "Users", 'total' : '99K', 'redirect' : 'users'}, {'name': "Subscribers", 'total' : '50K', 'redirect': 'subscribers'}])

 function redirectTo(path)
 {
    navigate('/' + path);
 }

 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(cardArr).map((res, index) => (
          <Grid  key={index}>
            
            <Item onClick={()=> redirectTo(res.redirect)}  className={`${classes[`gradientBackground${index}`] }`}>

            <Box  sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ ...commonStyles, borderRadius: '50%' }}  className={classes.iconBackground1}>
              <People color="primary" sx={{p: 1, fontSize: 30}} />
              <Typography variant='h5' sx={{fontWeight: 500, color: 'blue', mt: 2, fontFamily: 'serif'}}>{res.total}</Typography>
              <Typography variant='body2' sx={{fontFamily: 'serif'}}>{res.name} </Typography>

</Box>
             

</Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}