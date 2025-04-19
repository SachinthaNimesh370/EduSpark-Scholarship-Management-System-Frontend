import React from 'react';
import TextField from '@mui/material/TextField';

function InputField({ id, label, type, autoComplete, onChange, value }) {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      variant="outlined"
      margin="normal"
      fullWidth
      autoComplete={autoComplete}
      onChange={onChange}
      value={value}
    />
  );
  
}

export default InputField
