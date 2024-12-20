import React from 'react';
import { BiSolidDish } from 'react-icons/bi';
import { FaCalendar, FaUser } from 'react-icons/fa';
import { GoBellFill } from 'react-icons/go';
import { ImProfile } from 'react-icons/im';
import { LiaWineBottleSolid } from 'react-icons/lia';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdAccountBalance } from 'react-icons/md';
import { RiApps2Fill, RiCheckboxBlankCircleFill } from 'react-icons/ri';
// import Debit from './Debit.jsx';
// import Vendor from './Vendor';

function Navbar() {
  return (
    <div>
      {/* Top Navigation */}
      <nav className="h-20 bg-[#202020] text-white flex items-center justify-center px-10 relative">
        <div className="absolute left-10 flex items-center">
          <RiCheckboxBlankCircleFill className="text-teal-400 mr-1" />
          <h1 className="text-lg font-bold">HMS</h1>
        </div>

        <ul className="flex justify-center items-center space-x-16 text-gray-300 ml-[210px]">
          <li className="flex items-center space-x-1 mt-[15px]">
            <LuLayoutDashboard />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-1 mt-[15px]">
            <BiSolidDish />
            <span>Rooms</span>
          </li>
          <li className="flex items-center space-x-1 mt-[15px]">
            <ImProfile />
            <span>Attendance</span>
          </li>
          <li className="flex items-center space-x-1 mt-[15px]">
            <MdAccountBalance />
            <span>Accounts</span>
          </li>
          <li className="flex items-center space-x-1 mt-[15px]">
            <LiaWineBottleSolid />
            <span>Maintenance</span>
          </li>
        </ul>

        <div className="absolute right-10 flex items-center space-x-6">
          <div className="bg-gray-500 p-2 rounded-full flex items-center justify-center">
            <FaCalendar />
          </div>
          <div className="bg-gray-500 p-2 rounded-full flex items-center justify-center">
            <GoBellFill style={{ color: 'yellow' }} />
          </div>
          <div className="bg-gray-500 p-2 rounded-full flex items-center justify-center">
            <FaUser style={{ color: 'cyan' }} />
          </div>
        </div>
      </nav>

      {/* Sidebar and Vendor Section */}
      <div className="flex">
        {/* Sidebar */}
        <nav className="h-[550px] bg-[#202020] rounded-lg mt-4 ml-4">
          <ul className="space-y-4 w-[200px] p-4 text-gray-400">
            <li className="flex items-center space-x-2">
              <RiApps2Fill />
              <span className="text-sm">Dashboard</span>
            </li>
            <li>
              <span className="text-sm">Credit</span>
            </li>
            <li>
              <span className="text-sm">Debit</span>
            </li>
            <li>
              <span className="text-sm">Vendors</span>
            </li>
            <li>
              <span className="text-sm">Orders</span>
            </li>
            <li>
              <span className="text-sm">Expected</span>
            </li>
            <li>
              <span className="text-sm">Overdue</span>
            </li>
          </ul>
        </nav>

        {/* Vendor Component */}
        {/* <div className="flex-1">
          <Vendor />
        </div> */}
        {/* <Debit/> */}
      </div> 
    </div>
  );
}

export default Navbar;
