import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import imgICon from '../../assets/images/home.jpg';
import { Link } from '@mui/material';
import { AuthProvider } from '../functional/auth/AuthContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const theme = createTheme({
    palette: {
        primary: {
            main: '#8b00ff',
        },
    }
});

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   
    
    const handleLogin = async () => {
        console.log({ username})
       

        if(username && password)
        {
            localStorage.setItem('isLogged', 'true');

        // try {
        //     const response = await axios.post('/api/login', { username, password });
        //     // Handle successful login
        //     console.log(response.data);
        // } catch (error) {

        //     // Handle login error
        //     console.error(error);
        // }
    }else{
        toast.error("Enter Valid username / Password", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

    }
    };

    return (
        <ThemeProvider theme={theme}>
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                    height: 500,
                    width: 900,
                }}
            >

                <Box elevation={0}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        m: 5,
                        minWidth: { md: 350 },
                    }}
                >
                    <Box component="span" sx={{ fontSize: '2rem', mb: 2 }}>
                        Account Login
                    </Box>
                    <form >

                        <Box component="span" sx={{ color: 'primary.main', fontSize: 18 }}>
                            <TextField
                                variant="filled"
                                id="outlined-username-input"
                                label="Username"
                                type="text"
                                sx={{ my: 2, width: 350 }}
                                autoComplete="current-username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Box>

                        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                            <TextField
                                variant="filled"
                                sx={{ my: 2, width: 350 }}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Box>
                        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                                <Button onClick={handleLogin} variant="contained" sx={{ my: 2, width: 350, color: '#fff' }}>Login</Button>

                        </Box>
                    </form>

                    {/* <button onClick={notify}>Click Me!</button> */}

                    <Box component="span" sx={{ color: 'primary.main', fontSize: 12 }}>
                        <Typography variant="body2" sx={{ ml: 8, mt: 3 }} >
                            <span style={{ color: '#000' }}> Forgot </span> Username / Password
                        </Typography>
                    </Box>

                </Box>

                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 400,
                        maxHeight: { xs: 500, md: 467 },
                        maxWidth: { xs: 550, md: 500 },
                    }}
                    alt="The house from the offer."
                    src={imgICon}
                />
            </Paper>
            <ToastContainer />

        </ThemeProvider>
    );
}