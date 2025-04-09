import React from 'react'
import { Box, Grid, TextField,InputLabel,Select,OutlinedInput,MenuItem,FormControl } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function RegisterPage() {
    function InputField({ label, type, id }) {
        return (
          <TextField
            id={id}
            label={label}
            type={type}
            variant="outlined"
            margin="none" 
            fullWidth
          />
        );
    }


    //Start Role Selectoer
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };
      
    function RoleSelector(){
        const [role, setRole] = React.useState([]);
        const theme = useTheme();

        const names = ['Provider','Cordinator','Lecturer','Student' ];
          
        function getStyles(name, role, theme) {
            return {
              fontWeight: role.includes(name)
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
            };
        }

        const handleChange = (event) => {
            setRole(event.target.value); // Single string value
        };
        return(
            <>
                <FormControl fullWidth>
                    <InputLabel id="role-selector-label">Role</InputLabel>

                    <Select
                        labelId="role-selector-label"
                        id="selected"
                        value={role}
                        onChange={handleChange}
                        input={<OutlinedInput label="Role" />}
                        MenuProps={MenuProps}
                    >
                        <MenuItem value="">
                            <em>Select a role</em>
                        </MenuItem>

                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, role, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </>
        )
    }
    //Finish Role Selector

  return (
    <Box>
        <Grid container rowSpacing={2} columnSpacing={2} >
        {/* First Name and Last Name in the same row */}
            <Grid  size={6}>
                <InputField id="fname" label="First Name" type="text" />
            </Grid>
            <Grid size={6}>
                <InputField id="lname" label="Last Name" type="text"/>
            </Grid>
            <Grid size={12} >
                <InputField id="email"  label="Email" type="email" />
            </Grid>

            <Grid size={12} >
                <RoleSelector />
            </Grid>

            <Grid size={12} >
                <InputField id="conPassword" label="Password" type="password"  />
            </Grid>
            <Grid size={12} >
                <InputField id="password" label="Confirm Password" type="password" />
            </Grid>

        </Grid>
      
        


        
    </Box>
  )
}

export default RegisterPage