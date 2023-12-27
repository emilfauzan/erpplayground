import { ApiResponse } from '@/interface/typings';
import { ResponsiveBar } from '@nivo/bar';
import React from 'react'

interface BarProps {
    data: ApiResponse[];
}

const Bar: React.FC<BarProps> = () => {
    const chartData = data
        .filter((item) => item.GROUP_DATA === 'ESTATE')
        .map((item) => ({
            ESTATE: item.ESTATE,
            RKH_KG: item.RKH_KG,
            REAL_KG: item.REAL_KG,
        }));

    return (
        <div style={{ height: '400px' }}>
            <ResponsiveBar
                data={chartData}
                keys={['RKH_KG', 'REAL_KG']}
                indexBy="ESTATE"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: 'REAL_KG',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'RKH_KG',
                        },
                        id: 'lines',
                    },
                ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'ESTATE',
                    legendPosition: 'middle',
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Amount',
                    legendPosition: 'middle',
                    legendOffset: -40,
                }}
                enableLabel={false}
                tooltip={({ id, value, color }) => (
                    <strong style={{ color }}>
                        {id}: {value}
                    </strong>
                )}
            />
        </div>
    )
}

export default Bar