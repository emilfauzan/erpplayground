"use client"

import React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField, Typography, Button, Link, Grid, OutlinedInput, Tooltip } from '@mui/material'
import Image from "next/image";
import CompanyLogo from "@/public/images/companyLogo/companyLogo.png";
import { FormUsernamePassword } from '@/components/login/FormUsernamePassword';

const Login = () => {


  return (
    <section className='flex min-h-screen items-center justify-center'>
      <div className="border grid grid-cols-1 sm:grid-cols-2 border-blue-gray-500 rounded-xl mx-10">

        {/* Login Section */}
        <div className='items-center m-6 p-4 grid gap-1'>
          <Typography className="text-left font-extrabold" variant="h5">
            NT CORP ANALYTICS
          </Typography>
          <Typography className="text-left font-bolder" variant="body2">
            Digital Analysis Made Simple
          </Typography>

          <FormUsernamePassword />

          <Tooltip title="Contact HRD via WhatsApp for further information." placement="bottom-end">
            <Link className='text-right text-success text-sm' href="https://wa.me/+628170791244" target="_blank">
              Forgot Password?
            </Link>
          </Tooltip>

        </div>

        {/* Picture & Logo Section */}
        <div className='items-center m-6 p-4 text-center hidden sm:grid gap-0 duration-300 ease-in-out'>
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
              <Typography className='font-cinzel font-bold hidden 3xsm:block tracking-wide pl-2' variant='h4'>
                NT CORP
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='font-cinzel font-bold hidden 3xsm:block tracking-wide pl-2' variant='h6'>
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