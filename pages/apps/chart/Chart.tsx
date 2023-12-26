import Bar from '@/components/common/charts/Bar';
import { ApiResponse } from '@/interface/typings';
import React from 'react'
import { useQuery } from 'react-query';

const Chart: React.FC = () => {
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
    <div>Chart</div>
    <div>
         {data && <Bar data={data} />}
    </div>
    </>
  )
}

export default Chart