import React, { useState } from 'react';
import { Box, Grid, Button, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import useStyles from './SignUpStyles';
import axios from 'axios';
import { InputField } from '../../component';
import { useNavigate } from 'react-router-dom';



function SignUpPage() {
    const navigate = useNavigate();
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',  
    password: '',
    confirmPassword: '',
     
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRoleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      role: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8090/api/v1/user/signup', formData);
      console.log('Sign Up Success:', response.data);
      
    } catch (error) {
      console.error('Sign Up Error:', error.response?.data || error.message);
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
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} className={classes.inputWrapper}>
            
              <InputField
                id="name"
                label="User Name"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                value={formData.name}
              />
            

            
              <InputField
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                value={formData.email}
              />

                <FormControl fullWidth className={classes.selectControl}>
                <InputLabel id="role-label">Select Role</InputLabel>
                <Select
                  labelId="role-label"
                  value={formData.role}
                  label="Select Role"
                  onChange={handleRoleChange}
                >
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="lecturer">Lecturer</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
            

            
              <InputField
                id="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={formData.password}
              />
            

            
              <InputField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            

            {/* NEW Role Selector */}
            
              
            

          </Grid>

          <Grid item xs={12} className={classes.buttonWrapper}>
            <Button 
                onClick={() => navigate('/')} 
                className={classes.signInButton}>
              Already have an account?
            </Button>

            <Button
              type="submit"
              variant="contained"
              className={classes.signUpButton}
            >
              Register
            </Button>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default SignUpPage;
