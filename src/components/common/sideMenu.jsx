// components/StickySideMenu.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';
// import  CommonCode  from '../functional/CommonCode';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  manuBackground: {
    background: 'linear-gradient(45deg, #eee 40%, #eee);',
    height: 700
  },
  listBackground: {
    background: 'linear-gradient(45deg, #b9badb 40%, #eee)',
    marginTop: 4
  }

}));

 function  SideMenu () {
  const classes = useStyles();
  // let navigate = useNavigate();

 
  return (
    <Drawer variant="permanent">
      <Box sx={{marginTop: 8, width: 250}} className={classes.manuBackground}>
      <List>
      <ListItem className={classes.listBackground}>
          <ListItemText> <Link href="/home" underline="none">Home</Link>  </ListItemText>
        </ListItem>
        <ListItem className={classes.listBackground}>
          <ListItemText> <Link href="/users" underline="none">Users</Link>  </ListItemText>
        </ListItem>
        <ListItem className={classes.listBackground} >
          <ListItemText> <Link href="/subscribers" underline="none">Subscribers</Link>  </ListItemText>
        </ListItem>
        {/* Add more list items as needed */}
      </List>
      </Box>
    </Drawer>
    
  );
};

export default SideMenu;


