"use client"

import React from 'react'
import estate from '@/app/api/estate.json'

const Calendar = () => {
    return (
        <>
            <h1 className='pb-4 text-title-md2 font-bold'>Calendar</h1>
            <pre>{JSON.stringify(estate.meta, null, 2)}</pre>
            <pre>{JSON.stringify(estate.data)}</pre>
            
        </>
    )
}

export default Calendar