"use client"
import React from 'react'

async function postData(url: string, data: any) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(JSON.stringify(result));

    return result;
}

const ProductionDashboard = () => {
    const handleClick = async () => {
        const apiUrl = 'http://103.121.213.173/webapi/dashboard/getCurrentProduction.php';

        const requestData = {
            p_date: '11-12-2023',
            p_sectioncode: '01',
            // Add other data properties as needed
        };

        try {
            const jsonResponse = await postData(apiUrl, requestData);
            console.log('JSON Response:', jsonResponse);
            // Handle the response as needed
        } catch (error) {
            console.error('Error:', error);
            // Handle errors
        }
    };
    return (
        <>
            <h1 className='pb-4 text-title-md2 font-bold'>Production Dashboard</h1>
            <div>
                <button className='border p-2 rounded-lg' onClick={handleClick} >button</button>
            </div>
        </>
    )
}

export default ProductionDashboard