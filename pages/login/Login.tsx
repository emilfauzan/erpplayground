"use client"

import React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField, Typography, Button, Link, Grid } from '@mui/material'
import Image from "next/image";
import CompanyLogo from "@/public/images/companyLogo/companyLogo.png";

const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <section className='flex min-h-screen items-center justify-center'>
      <div className="border grid grid-cols-1 sm:grid-cols-2 border-blue-gray-500 rounded-lg mx-4">

        {/* Login Section */}
        <div className='border border-blue-500 items-center m-6 p-4 grid gap-3'>
          <Typography className="tracking-wider text-left font-extrabold" variant="h6">
            NT CORP ANALYTICS
          </Typography>
          <Typography className="tracking-wider text-left font-bolder" variant="body2">
            Digital Analysis Made Simple
          </Typography>

          <TextField
            id="standard-basic"
            label="Email"
            variant="filled"
            placeholder="example@example.com"
          />

          <FormControl variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button variant="contained" color="success" className='text-green-500 hover:text-white font-bold hover:bg-green-500'>
            Login
          </Button>

          <Link className='text-right text-success text-sm' href="#">
            Forgot Password?
          </Link>

        </div>

        {/* Picture Section */}
        <div className='border border-red-500 items-center m-6 p-4 text-center hidden sm:grid gap-0'>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={1}
          >
            <Grid item>
              <Image
                src={CompanyLogo}
                width={64}
                height={64}
                alt="Company Logo"
              />
            </Grid>
            <Grid item>
              <Typography  className='font-cinzel font-bold hidden 3xsm:block tracking-wide pl-2'>
                NT CORP
              </Typography>
            </Grid>
            <Grid item>
              <Typography  className='font-cinzel font-bold hidden 3xsm:block tracking-wide pl-2'>
                PT. BANGKITGIAT USAHA MANDIRI
              </Typography>
            </Grid>
          </Grid>
        </div>

      </div>
    </section>
  )
}

export default Login