import React from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';

function SignInPage() {
  function InputField({ id, label, type, autoComplete }) {
    return (
      <TextField
        id={id}
        label={label}
        type={type}
        variant="outlined"
        margin="none"
        fullWidth
        autoComplete={autoComplete}
      />
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f0f2f5' }} // Light page background
    >
      <Box
        sx={{
          borderRadius: 3,
          minWidth: 320,
          maxWidth: 400,
          width: '100%',
          padding: 4,
          backgroundColor: '#ffffff',
          boxShadow: 3, // subtle shadow
        }}
      >
        <Grid container spacing={2} marginBottom={4}>
          <Grid size={12}>
            <InputField id="username" label="User Name" type="text" autoComplete="off"/>
          </Grid>
          <Grid size={12}>
            <InputField id="password" label="Password" type="password" autoComplete="new-password" />
          </Grid>
        </Grid>
        <Grid size={6} display="flex" justifyContent="flex-end" alignContent='flex-end'>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              paddingY: 1.2,
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#115293',
              },
            }}
          >
            Sign In
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignInPage;
