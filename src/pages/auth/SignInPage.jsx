import React, { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import useStyles from './SignInStyles';
import axios from 'axios';
import { InputField } from '../../component';

function SignInPage() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    username: '',
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
      const response = await axios.get('http://localhost:8090/api/v1/home/login', formData);
      console.log('Login Success:', response.data);
      // handle success (e.g., redirect, show toast, save token)
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      // handle error (e.g., show error message)
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.card}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', marginBottom: 4 }}
        >
          Sign In
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} className={classes.inputWrapper}>
            <Grid item xs={12}>
              <InputField
                id="username"
                label="User Name"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                value={formData.username}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                id="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={formData.password}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.buttonWrapper}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
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
