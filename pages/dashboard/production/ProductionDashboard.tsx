"use client"
import { ApiResponse, RequestData } from '@/interface/typings';
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

    const result: ApiResponse[] = await response.json();
    // console.log(JSON.stringify(result));

    return result;
}

const ProductionDashboard = () => {
    const [responseData, setResponseData] = useState<ApiResponse[] | null>(null);

    const handleClick = async () => {
        const apiUrl = 'http://103.121.213.173/webapi/dashboard/getCurrentProduction.php';

        const requestData: RequestData = {
            p_date: '14-12-2023',
            p_sectioncode: '04',
        };

        try {
            const jsonResponse = await postData(apiUrl, requestData);
            // const jsonString = JSON.stringify(jsonResponse, null, 2);
            setResponseData(jsonResponse);
            // console.log('JSON Response:', jsonString);
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
            {responseData && (
                <div>
                    <h2>Table:</h2>
                    <table>
                        <thead className='border'>
                            <tr>
                                <th>GROUP_DATA</th>
                                <th>RANKING</th>
                                <th>ESTATE</th>
                                <th>AFDELING</th>
                                <th>TPH</th>
                                <th>PEMANEN</th>
                                <th>RKH_JJG</th>
                                <th>RKH_KG</th>
                                <th>REAL_JJG</th>
                                <th>REAL_KG</th>
                                <th>VAR_HI_KG</th>
                                <th>PROD_STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {responseData.map((item, index) => (
                                <tr className='border' key={index}>
                                    <td>{item.GROUP_DATA}</td>
                                    <td>{item.RANKING}</td>
                                    <td>{item.ESTATE}</td>
                                    <td>{item.AFDELING}</td>
                                    <td>{item.TPH}</td>
                                    <td>{item.PEMANEN}</td>
                                    <td>{item.RKH_JJG}</td>
                                    <td>{item.RKH_KG}</td>
                                    <td>{item.REAL_JJG}</td>
                                    <td>{item.REAL_KG}</td>
                                    <td>{item.VAR_HI_KG}</td>
                                    <td>{item.PROD_STATUS}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default ProductionDashboard