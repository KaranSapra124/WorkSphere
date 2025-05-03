import React, { useState } from 'react'

const JobApplication = () => {
    type ApplicantStatus = "Pending" | "Accepted" | "Rejected";

    interface JobApplicant {
        id: string;
        name: string;
        image: string;
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

    return (
        <div>
            <h1>Job Applications</h1>
            {
                jobApplicantsData?.map((elem: JobApplicant, index: number) => {
                    return <>
                        <div className='flex gap-4'>
                            <img className='rounded-full w-52' src={elem?.image} alt={elem?.name} />
                            <div>
                                <h2>{elem?.name}</h2>
                                <p>{elem?.role}</p>
                            </div>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default JobApplication
