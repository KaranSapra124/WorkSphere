import { ApexOptions } from 'apexcharts';
import Chart from "react-apexcharts"
const CompanyRevenue = () => {
    const columnChartSeries = [
        {
            name: "Revenue",
            data: [45000, 48000, 52000, 50000, 55000, 60000, 62000, 61000, 64000, 68000, 70000, 73000],
        },
        {
            name: "Cashflow",
            data: [30000, 32000, 35000, 34000, 37000, 42000, 43000, 41000, 44000, 46000, 48000, 50000],
        },
        {
            name: "Net Profit",
            data: [12000, 14000, 15000, 16000, 18000, 19000, 20000, 21000, 22000, 24000, 26000, 28000],
        },
    ];

    const columnChartOptions: ApexOptions = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                // endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
        },
        yaxis: {
            title: {
                text: 'Amount (INR)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `₹${val.toLocaleString()}`;
                }
            }
        }
    };
    return (
<div className='shadow h-full'>

<Chart options={columnChartOptions} series={columnChartSeries} type="bar" height={350} />
</div>

    )
}

export default CompanyRevenue
