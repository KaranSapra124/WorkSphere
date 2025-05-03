import React, { useState } from 'react'

const JobApplication = () => {
    type ApplicantStatus = "Pending" | "Accepted" | "Rejected";

    interface JobApplicant {
        id: string;
        name: string;
        image: string;
        email?: string;
        role: string;
        status: ApplicantStatus;
    }

    const jobApplicants: JobApplicant[] = [
        {
            id: "1",
            name: "Aarav Mehta",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            role: "Frontend Developer",
            status: "Pending",
        },
        {
            id: "2",
            name: "Neha Sharma",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            role: "UI/UX Designer",
            status: "Pending",
        },
        {
            id: "3",
            name: "Rohan Verma",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            role: "Backend Developer",
            status: "Pending",
        },
        {
            id: "4",
            name: "Isha Kapoor",
            image: "https://randomuser.me/api/portraits/women/12.jpg",
            role: "QA Engineer",
            status: "Pending",
        },
        {
            id: "5",
            name: "Kunal Patel",
            image: "https://randomuser.me/api/portraits/men/11.jpg",
            role: "DevOps Engineer",
            status: "Pending",
        },
    ];

    const [jobApplicantsData, setJobApplicantsData] = useState<JobApplicant[]>(jobApplicants)
    const [status, setStatus] = useState<ApplicantStatus[]>(["Pending", "Accepted", "Rejected"])
    return (
        <div className=' w-full shadow p-2'>
            <h1 className='text-gray-700 font-semibold'>Job Applications</h1>
            <div className='flex flex-col gap-2  my-2'>
                {
                    jobApplicantsData?.map((elem: JobApplicant, index: number) => {
                        return <>
                            <div className='flex gap-4 justify-between'>
                                <div className='flex gap-2'>
                                    <img className='rounded-full w-10' src={elem?.image} alt={elem?.name} />
                                    <div>
                                        <h2 className='text-gray-800 font-semibold'>{elem?.name}</h2>
                                        <p className='text-gray-500 text-sm font-semibold'>{elem?.role}</p>
                                    </div>
                                </div>
                                <select onChange={(e) => {
                                    setJobApplicantsData((prev, currIndex: number) => {
                                        return prev.filter((user: JobApplicant, dataIndex: number) => {
                                            if (dataIndex === index) {
                                                return { ...user, status: e.target.value }
                                            } else {
                                                return user
                                            }
                                        })
                                    })
                                }} defaultValue="Pick a color" className="w-52 shadow rounded text-sm shadow-gray-500 p-2">
                                    {status?.map((elem, index) => {
                                        return <option className='text-sm'>{elem}</option>
                                    })}
                                </select>
                            </div >
                        </>
                    })
                }
            </div>
        </div >
    )
}

export default JobApplication
