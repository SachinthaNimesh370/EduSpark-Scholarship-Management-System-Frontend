import React from 'react';
import { Box, Grid, Button,Typography } from '@mui/material';
import useStyles from './SignInStyles'; // Import the styles
import { InputField } from '../../component';
import axios from 'axios';

function SignInPage() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.card}>
      <Typography variant="h5"
                  align="center"
                  gutterBottom
                  sx={{ fontWeight: 'bold', marginBottom: 4 }} 
                >Sign In</Typography>

          <Grid container spacing={2} className={classes.inputWrapper}>
          <Grid size={12}>
            <InputField id="username" label="User Name" type="text" autoComplete="off" />
          </Grid>
          <Grid size={12}>
            <InputField id="password" label="Password" type="password" autoComplete="new-password" />
          </Grid>
        </Grid>
        <Grid size={12} className={classes.buttonWrapper}>
          <Button variant="contained" className={classes.button}>
            Sign In
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignInPage;
