import React, { useState } from 'react';
import { Box, Grid,Button, Typography } from '@mui/material';
import useStyles from './SignInStyles';
import axios from 'axios';
import { InputField} from '../../component';
import { useNavigate } from 'react-router-dom';



function SignInPage() {
  const navigate = useNavigate();
  const classes = useStyles();

  const [formData, setFormData] = useState({
    userName: 'Sachintha',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8090/api/v1/user/signin', formData);
      console.log('Login Success:', response.data);
      
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.card}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', marginBottom: 4 }}
        >
          Sign In
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} className={classes.inputWrapper}>
            
              <InputField
                id="userName"
                label="User Name"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                value={formData.userName}
              />
            
              <InputField
                id="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={formData.password}
              />
            
          </Grid>
          <Grid item xs={12} className={classes.buttonWrapper} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Button onClick={() => navigate('/signup')}
              sx={{fontSize: '15px',
              display: 'flex',
              alignSelf: 'flex-start',}}
            >
              Sign Up
            </Button>

            <Button
              type="submit"
              variant="contained"
              
              // className={classes.button }
              sx={{fontSize: '15px',
                display: 'flex',
                alignSelf: 'flex-end',}}
              
              
            >
              Sign In
            </Button>
          </Grid>
         
        </form>
      </Box>
    </Box>
  );
}

export default SignInPage;
