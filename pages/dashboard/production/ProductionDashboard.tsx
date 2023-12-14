"use client"
import React from 'react'


// interface requestDataprops{
//     p_date: string;
//     p_sectioncode: string;
// }

async function postData(url: string) {
    const response = await fetch('http://103.121.213.173/webapi/dashboard/getCurrentProduction.php', {
        method: 'POST',
        body: JSON.stringify({
            p_date: '12-12-2023',
            p_sectioncode: '01'
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },

    })
    // const response = await fetch(url, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         p_date: '11-12-2023',
    //         p_sectioncode: '01'
    //     }),
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    // });

    const result = await response.json();
    console.log(JSON.stringify(result));

    return result;
}
const ProductionDashboard = () => {
    const handleClick = async () => {
        const apiUrl = 'http://103.121.213.173/webapi/dashboard/getCurrentProduction.php';

        try {
            const jsonResponse = await postData(apiUrl);
            console.log('JSON Response:', jsonResponse);
            // response bentuk json
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <h1 className='pb-4 text-title-md2 font-bold'>Production Dashboard</h1>
            <div className='flex justify-center my-20'>
                <button className='border p-2 rounded-lg font-bold hover:bg-green-500 hover:text-white ease-in-out duration-200 hover:border-green-500' onClick={handleClick} >Post cok</button>
            </div>
        </>
    )
}

export default ProductionDashboard