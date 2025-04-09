import React from 'react'
import {Box,Grid,TextField,Button} from '@mui/material'

function SignInPage() {
  function InputField({id,label,type,autoComplete}){
    return(
      <TextField
      id={id}
      label={label}
      type={type}
      variant='outlined'
      margin='none'
      fullWidth
      autoComplete={autoComplete}
      
    />
    )
  }
  
  return (
    <Box>
      <Grid container spacing={2} marginBottom={2}>
        <Grid size={12}>
          <InputField id='username' label='User Name' type='text' autoComplete='false'/>
        </Grid>
        <Grid size={12}>
          <InputField id='password' label='Password'  type='password' autoComplete='new-password'/>
        </Grid>
        <Grid container justifyItems='flex-end'>
          <Button variant="contained" >Sign In</Button>
        </Grid>
        
      </Grid>
      
      
      
        

    </Box>
  )
}

export default SignInPage
