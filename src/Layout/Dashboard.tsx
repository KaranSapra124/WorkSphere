import React from 'react';
import { MdDashboard, MdOutlineReport, MdPeople, MdOutlineAttachMoney } from 'react-icons/md';
import { HiOutlineClipboardList, HiOutlineClock, HiOutlineUserGroup } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <>
            <div className='flex'>

                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-self-start">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            Open drawer
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            <li>
                                <a>
                                    <MdDashboard className="mr-2" /> Dashboard
                                </a>
                            </li>
                            <li>
                                <a>
                                    <MdOutlineReport className="mr-2" /> Reports
                                </a>
                            </li>

                            <li className="menu-title">
                                <span>Essentials</span>
                            </li>
                            <li>
                                <a>
                                    <MdPeople className="mr-2" /> Employee Directory
                                </a>
                            </li>
                            <li>
                                <a>
                                    <HiOutlineClipboardList className="mr-2" /> Leave Tracker
                                </a>
                            </li>
                            <li>
                                <a>
                                    <HiOutlineClock className="mr-2" /> Attendance
                                </a>
                            </li>
                            <li>
                                <a>
                                    <MdOutlineAttachMoney className="mr-2" /> Payroll
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Dashboard;
