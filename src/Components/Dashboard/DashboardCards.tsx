import React from 'react'

interface dashboardCard {
    title: string;
    value: string;
    description: string;
    icon: string;
}
const DashboardCards: React.FC<{ data: dashboardCard }> = ({ data }) => {


    return (
        <>
            <div>
                <h1>{data?.icon}</h1>
            </div>
        </>
    )
}

export default DashboardCards
