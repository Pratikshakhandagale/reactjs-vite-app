
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme) => ({
  ListBackground: {
    background: 'linear-gradient(45deg, #8083bd 40%, #eee)',
  }

}));

function createData(id, profileUrl, name, mobile, city) {
  return {
    id,
    profileUrl,
    name,
    mobile,
    city
  };
}

const default_avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ablvNoAMTxtDwRDwbeUyju4uubIZwb8qUh5EwsETFVaB4FglswUWy9xbgPuX4fLLhn8&usqp=CAU'
const rows = [
  createData(1, default_avatar, "Amit shaha", 9822334567, 'Pune'),
  createData(1, default_avatar, "Jay kumar", 9822334567, 'Pune'),
  createData(1, default_avatar, "Kali shaha", 9822334567, 'Pune'),
  createData(1, default_avatar, "Nish shaha", 9822334567, 'Pune'),
  createData(1, default_avatar, "Kumar shaha", 9822334567, 'Pune'),
  createData(1, default_avatar, "Jagdiash shaha", 9822334567, 'Pune'),
  createData(1, default_avatar, "Nish shaha", 9822334567, 'Pune'),
  createData(1, default_avatar, "Joy shaha", 9822334567, 'Pune'),

];

export default function Users() {
  const classes = useStyles();

  return (
    <div className='page-layout'>
      <TableContainer component={Paper}>
        <Table sx={{ width: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.ListBackground}>
              <TableCell sx={{ fontWeight: 700, paddingLeft: 3 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="left">Mobile Number&nbsp;(g)</TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="left">City&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              //  <Link href="/profile" sx={{ width: 2000 }}underline="none">
              <TableRow 
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               
                <TableCell component="th" align="left" scope="row" sx={{ display: 'flex' }}>
                  <Avatar src={row.profileUrl} sx={{ width: 56, height: 56 }}>  </Avatar>
                  <Typography align="left" sx={{ margin: 2 }}>{row.name}</Typography>
                </TableCell>

                <TableCell align="left">{row.mobile}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
               
              </TableRow>
              // </Link>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
    </div>
  );
}