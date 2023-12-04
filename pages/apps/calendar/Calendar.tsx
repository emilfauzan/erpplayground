"use client"

import React from 'react'
import estate from '@/app/api/estate.json'

const Calendar = () => {
    return (
        <>
            <h1 className='pb-4 text-title-md2 font-bold'>Calendar</h1>
            <p>{JSON.stringify(estate.meta, null, 2)}</p>
            <p>{JSON.stringify(estate.data)}</p>
            
        </>
    )
}

export default Calendar