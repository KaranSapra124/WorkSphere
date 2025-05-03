import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const options: ApexOptions = {
    chart: {
        type: 'donut',
        // width: 220
    },
    labels: [
        'Salary',
        'Bonus',
        'Commission',
        'Overtime',
        'Reimbursement',
        'Benefits',
    ],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 300,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
    ],
    tooltip: {
        y: {
            formatter: (val: number) => `${val}%`,
        },
    },
    legend: {
        position: 'right',
    },
};

const series = [60, 10, 8, 7, 5, 10]; // Total = 100%

const CompanyPayBreakdownChart = () => {
    return (
        <div className="w-full h-full shadow my-auto  mx-auto">
            <h1 className='text-gray-500 font-semibold p-2'>Company Pay</h1>
            <ReactApexChart options={options} series={series} type="donut" height={350} />
            <div className='flex justify-between py-2 px-2 border-t border-gray-200'>
                <p className='text-gray-500 font-semibold'>Get Report!</p>
                <button className='bg-primary p-1 rounded font-semibold text-white'>Download</button>
            </div>
        </div>
    );
}

export default CompanyPayBreakdownChart
