import Bar from '@/components/common/charts/Bar';
import { ApiResponse } from '@/interface/typings';
import { Typography } from '@mui/material';
import React from 'react'
import { useQuery } from 'react-query';

const Chart: React.FC = () => {
  // const { data, isLoading, error } = useQuery<ApiResponse[], Error>(
  //     'fetchData',
  //     fetchData
  //   );

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   }
  return (
    <>
      <Typography className='pb-6 font-bold' variant='h5'>
        Chart
      </Typography>

      <Typography variant='body1'>
        This is a Chart & Statistics page. <br /> Kindly please wait for our further development process.
      </Typography>

      {/* <div>
        {data && <Bar data={data} />}
      </div> */}
    </>
  )
}

export default Chart