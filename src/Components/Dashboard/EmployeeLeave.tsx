import React, { useState } from 'react'

interface EmployeeLeave {
    name: string;
    department: string;
    days: number;
    date: string; // Could also be a Date object, but string is simpler for mock data
    status: 'pending' | 'approved' | 'rejected';
}
const EmployeeLeave = () => {
    const [employeeLeaves, setEmployeeLeaves] = useState<EmployeeLeave[]>([
        {
            name: 'John Doe',
            department: 'Engineering',
            days: 5,
            date: '2024-01-15',
            status: 'approved',
        },
        {
            name: 'Jane Smith',
            department: 'Marketing',
            days: 3,
            date: '2024-02-20',
            status: 'pending',
        },
        {
            name: 'David Lee',
            department: 'Sales',
            days: 2,
            date: '2024-03-10',
            status: 'approved',
        },
        {
            name: 'Sarah Kim',
            department: 'HR',
            days: 7,
            date: '2024-04-01',
            status: 'rejected',
        },
        {
            name: 'Michael Brown',
            department: 'Engineering',
            days: 4,
            date: '2024-05-12',
            status: 'pending',
        },
        {
            name: 'Alice Johnson',
            department: 'Finance',
            days: 1,
            date: '2024-06-02',
            status: 'approved'
        },
        {
            name: 'Bob Williams',
            department: 'Marketing',
            days: 10,
            date: '2024-07-18',
            status: 'pending'
        },
        {
            name: 'Charlie Davis',
            department: 'Sales',
            days: 6,
            date: '2024-08-25',
            status: 'approved'
        },
        {
            name: 'Diana Miller',
            department: 'HR',
            days: 3,
            date: '2024-09-05',
            status: 'rejected'
        },
        {
            name: "Ethan Martinez",
            department: "Engineering",
            days: 2,
            date: "2024-10-21",
            status: "approved"
        }
    ])

 
    return (
        <div>

        </div>
    )
}

export default EmployeeLeave
