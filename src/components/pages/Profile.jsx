import { Avatar, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const default_avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ablvNoAMTxtDwRDwbeUyju4uubIZwb8qUh5EwsETFVaB4FglswUWy9xbgPuX4fLLhn8&usqp=CAU'

function Profile() {

    return (
        <div className='page-layout'>
            <Paper className="profileBg " sx={{ textAlign: 'center'}}>
                <Avatar className='profileAvatar'
                    src={default_avatar}
                    sx={{ width: 100, height: 100 }}
                >  </Avatar>
               
               
            </Paper>
            <Box sx={{m:8,  textAlign: 'justifys', lineHeight: '2'}}>
                <Typography variant='h5' sx={{fontFamily:'fantasy', fontWeight: 700, color: '#231b8d'}}>Pratiksha khandagale</Typography>
              <Box>  <Typography variant='h7' sx={{fontFamily:'fantasy'}}><b>Mobile Number :</b> +91 9822845278</Typography> </Box>
              <Box> <Typography variant='h7' sx={{fontFamily:'fantasy'}}><b>Address : </b>Matoshree Niwas, Behind Police station, Uruli kanchan </Typography></Box>

               </Box>
        </div>
    );

}

export default Profile;