"use client"

import React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Typography, Link, Grid, Tooltip, Divider } from '@mui/material'
import Image from "next/image";
import CompanyLogo from "@/public/images/companyLogo/companyLogo.png";
import { FormUsernamePassword } from '@/components/login/FormUsernamePassword';

const Login = () => {


  return (
    <section className='flex min-h-screen items-center justify-center cursor-default'>
      <div className="border grid grid-cols-1 sm:grid-cols-2 border-blue-gray-500 rounded-2xl mx-10">

        {/* Login Section Srart */}
        <div className='items-center m-6 p-4 grid gap-1'>

          {/* Responsive Logo & Title Section Start */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={1}
            className='sm:hidden text-center mb-6'
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
              <Typography className='font-cinzel font-bold hidden 3xsm:block tracking-widest pl-2' variant='h4'>
                NT CORP
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='font-cinzel font-bold hidden 3xsm:block tracking-wide pl-2' variant='h6'>
                PT. BANGKITGIAT USAHA MANDIRI
              </Typography>
              <Typography className='font-cinzel font-bold hidden 3xsm:block tracking-wide pl-2 pb-7' variant='h6'>
                PALM OIL PLANTATION & MILL
              </Typography>
              <Divider variant="middle" />
            </Grid>
          </Grid>
          {/* Responsive Logo & Title Section End */}

          <Typography className="sm:text-left text-center font-extrabold" variant="h5">
            NT CORP ANALYTICS&copy;
          </Typography>
          <Typography className="sm:text-left text-center font-bold" variant="body1">
            Simplify your digital analytics.
          </Typography>
          <Typography className="sm:text-left text-center font-bolder text-blue-gray-500" variant="subtitle2">
            Powered by PT. BUM IT Development Team
          </Typography>

          <FormUsernamePassword />

          <Tooltip title="Contact HRD via WhatsApp for further information.">
            <Link className='text-right text-success text-sm' href="https://wa.me/+628170791244" target="_blank">
              Forgot Password?
            </Link>
          </Tooltip>

        </div>
        {/* Login Section End */}

        {/* Logo & Title Section Start */}
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
              <Typography className='font-cinzel font-bold hidden 3xsm:block tracking-widest pl-2' variant='h4'>
                NT CORP
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='font-cinzel font-bold hidden 3xsm:block tracking-wide pl-2' variant='h6'>
                PT. BANGKITGIAT USAHA MANDIRI
              </Typography>
              <Typography className='font-cinzel font-bold hidden 3xsm:block tracking-wide pl-2' variant='h6'>
                PALM OIL PLANTATION & MILL
              </Typography>
            </Grid>
          </Grid>
        </div>
        {/* Logo & Title Section End */}

      </div>
    </section>
  )
}

export default Login