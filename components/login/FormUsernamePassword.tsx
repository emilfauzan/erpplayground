import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'

export const FormUsernamePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    // Dummy credentials
    const dummyCredentials = [
      { username: 'admin@gmail.com', password: 'admin', redirectPath: '/dashboard/home' },
      { username: 'hradmin@gmail.com', password: 'hradmin', redirectPath: '/dashboard/human_resources' },
    ];

    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validate email & password
    const user = dummyCredentials.find(cred => cred.username === email && cred.password === password);

    if (!user) {
      // Credentials not found
      setEmailError('Invalid email or password.');
      return;
    }
  
    // Redirect to the dashboard on successful login
    window.location.href = user.redirectPath;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission behavior
    handleLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 gap-5 my-4'>
        <TextField
          error={Boolean(emailError)}
          id="outlined-basic-email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={emailError}
        />

        <FormControl variant="outlined" error={Boolean(passwordError)}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <FormHelperText>{passwordError}</FormHelperText>
        </FormControl>

        <Button
          variant="contained"
          color="success"
          className='text-green-500 hover:text-white font-bold hover:bg-green-500 py-3 border border-blue-gray-500'
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  )
}
