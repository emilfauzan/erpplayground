"use client"
import { RequestData } from '@/interface/typings';
import React, { useState } from 'react'


// interface requestDataprops{
//     p_date: string;
//     p_sectioncode: string;
// }

async function postData(url: string, data: RequestData) {
    const searchParams = new URLSearchParams();
    searchParams.append('p_date', data.p_date);
    searchParams.append('p_sectioncode', data.p_sectioncode);

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        body: searchParams.toString(),
        // JSON.stringify(data
        //     //     {
        //     //     p_date: '12-12-2023',
        //     //     p_sectioncode: '01'
        //     // }
        // ),

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
    // console.log(JSON.stringify(result));

    return result;
}

const ProductionDashboard = () => {
    const [responseString, setResponseString] = useState<string | null>(null);

    const handleClick = async () => {
        const apiUrl = 'http://103.121.213.173/webapi/dashboard/getCurrentProduction.php';

        const requestData: RequestData = {
            p_date: '14-12-2023',
            p_sectioncode: '04',
        };

        try {
            const jsonResponse = await postData(apiUrl, requestData);
            const jsonString = JSON.stringify(jsonResponse, null, 2);
            setResponseString(jsonString);
            console.log('JSON Response:', jsonString);
            // response bentuk json
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <h1 className='pb-4 text-title-md2 font-bold'>Production Dashboard</h1>
            <div className='flex justify-center my-20'>
                <button className='border p-2 rounded-lg font-bold hover:bg-green-500 text-green-500 hover:text-white ease-in-out duration-200 hover:border-green-500 border-green-500' onClick={handleClick} >Post la</button>
            </div>
                {responseString && (
                    <div>
                        <pre>{responseString}</pre>
                    </div>
                )}
        </>
    )
}

export default ProductionDashboard