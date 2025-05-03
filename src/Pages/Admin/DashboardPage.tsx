import React from 'react'
import DashboardCards, { dashboardCard } from '../../Components/Dashboard/DashboardCards';
import CompanyRevenue from '../../Components/Dashboard/Charts/CompanyRevenue';
import CompanyPayBreakdownChart from '../../Components/Dashboard/Charts/CompanyPay';

const AdminDashboard = () => {


    const dashboardCards: dashboardCard[] = [
        {
            title: "Total Employees",
            value: 120,
            description: "Active in organization",
            icon: "👥", // optional
            route: "/employees",
        },
        {
            title: "Leave Requests",
            value: 8,
            description: "Pending approval",
            icon: "📅",
            route: "/leave-tracker",
        },
        {
            title: "Attendance Today",
            value: "97%",
            description: "On-time check-ins",
            icon: "⏰",
            route: "/attendance",
        },
        {
            title: "Payroll Processed",
            value: "₹5,20,000",
            description: "This month",
            icon: "💰",
            route: "/payroll",
        },
    ];
    return (
        <>
            <div className=' w-full'>

                <div className='flex w-full'>
                    {dashboardCards?.map((elem: dashboardCard, index: number) => <DashboardCards data={elem} />)}
                </div>
                <div className='w-full flex'>
                    <CompanyRevenue />
                    <CompanyPayBreakdownChart/>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
