import React from 'react'

export interface dashboardCard {
    title: string;
    value: string | number;
    description: string;
    icon: string;
    route: string
}
const DashboardCards: React.FC<{ data: dashboardCard }> = ({ data }) => {


    return (
        <>
            <div className='flex gap-2 m-2 rounded  h-fit w-full p-2 shadow '>
                <h1 className='bg-primary rounded p-4 '>{data?.icon}</h1>
                <div >
                    <h3 className='lg:text-3xl text-gray-700 font-bold text-xl'>{data?.value}</h3>
                    <h2 className='lg:text-md text-gray-600 font-semibold'>{data?.title}</h2>
                </div>
            </div>
        </>
    )
}

export default DashboardCards
