import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Tooltip } from '@mui/material'
import React from 'react'

export const FormUsernamePassword = () => {
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  return (
    <div className='grid grid-cols-1 gap-5 my-4'>
      <TextField
            id="standard-basic"
            label="Email"
            variant="outlined"
            placeholder="example@example.com"
            className='hover:border-orange-500'
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <Tooltip title="Toggle password visibility">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button variant="contained" color="success" className='text-green-500 hover:text-white font-bold hover:bg-green-500 py-3'>
            Login
          </Button>
    </div>
  )
}
