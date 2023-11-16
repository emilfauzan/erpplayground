import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Topbar = () => {
    return (
        <div className='flex justify-between py-4 px-6 bg-blue-900 font-semibold'>
            <div className=''>Topbar</div>
            <AccountCircleIcon/>
        </div>

    )
}

export default Topbar