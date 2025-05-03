import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const options: ApexOptions = {
    chart: {
        type: 'donut',
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
        <div className="w-1/3 shadow my-auto  mx-auto">
            <ReactApexChart  options={options} series={series} type="donut" height={350} />
        </div>
    );
}

export default CompanyPayBreakdownChart
