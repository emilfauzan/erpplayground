"use client"

import React from 'react'
import estate from '@/app/api/estate.json'
import { Bar } from '@nivo/bar';
import { useQuery } from 'react-query';
import { ApiResponse } from '@/interface/typings';

const Calendar = () => {
    const { data, isLoading, error } = useQuery<ApiResponse[], Error>(
        'fetchData',
        fetchData
    );
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    return (
        <>
            <h1 className='pb-4 text-title-md2 font-bold'>Calendar</h1>
            <pre>{JSON.stringify(estate.meta, null, 2)}</pre>
            <pre>{JSON.stringify(estate.data)}</pre>

            {data && <Bar data={data} />}

            
        </>
    )
}

export default Calendar