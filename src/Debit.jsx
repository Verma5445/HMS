import React, { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { HiArrowsExpand } from "react-icons/hi";
import { CgMoreVertical } from "react-icons/cg";
import { RiApps2Fill } from "react-icons/ri";
import {
  TbHomeCheck,
  TbHomeMove,
  TbDeviceMobileCharging,
} from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import { MdAccessAlarm } from "react-icons/md";
import { BiSolidTrafficCone } from "react-icons/bi";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const chartData = [
  { name: "Mar", value: 110 },
  { name: "Apr", value: 80 },
  { name: "May", value: 90 },
  { name: "Jun", value: 60 },
  { name: "Jul", value: 70 },
  { name: "Aug", value: 55 },
];

const Debit = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-black">
      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-screen bg-stone-800 text-white z-50 p-4  transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full "
        } sm:translate-x-0 sm:w-[220px] `}
      >
        <ul className="space-y-4">
          <li className="flex items-center space-x-1">
            <RiApps2Fill />
            <span className="text-sm ">Dashboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <TbHomeCheck />
            <span className="text-sm">Credit</span>
          </li>
          <li className="flex items-center space-x-2">
            <TbHomeMove />
            <span className="text-sm">Debit</span>
          </li>
          <li className="flex items-center space-x-2">
            <IoMdTimer />
            <span className="text-sm">Vendors</span>
          </li>
          <li className="flex items-center space-x-2">
            <TbDeviceMobileCharging />
            <span className="text-sm">Orders</span>
          </li>
          <li className="flex items-center space-x-2">
            <BiSolidTrafficCone />
            <span className="text-sm">Expected</span>
          </li>
          <li className="flex items-center space-x-2">
            <MdAccessAlarm />
            <span className="text-sm">Overdue</span>
          </li>
        </ul>
      </nav>

      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="fixed top-0 left-1  sm:hidden z-50 bg-stone-800 text-white p-2 rounded "
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "X" : "Menu"}
      </button>

      {/* Main Content */}
      <div className="flex-1 ml-0 sm:ml-[220px] p-4">
        {/* Collection Section */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-[880px] bg-stone-800 p-4 rounded-md shadow-md flex flex-col md:flex-row items-start md:items-center">
            {/* Collection Info */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-white text-xl">Expenses</h1>
                <HiExternalLink className="text-xl text-white" />
              </div>

              {/* Collection Progress Circle */}

              <div
                className="w-32 h-32 mt-4 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "conic-gradient(#FF10F0 0% 25%, #00FFFF 25% 75%, #FFFF00 75% 100%)",
                }}
              >
                <div className="w-20 h-20 rounded-full bg-stone-800 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">50%</span>
                </div>
              </div>
            </div>

            {/* Collection Details */}
            <div className="flex-1 mt-6 md:mt-0 md:ml-8 xl:w-[7px]">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start ">
                {/* Cards */}
                <div className="w-full md:w-[270px] bg-zinc-950 text-white p-4 flex justify-between items-center rounded-md shadow-md">
                  <span>
                    Total Expense
                    <span className="block mt-2">₹ 52,00,000</span>
                  </span>
                  <HiExternalLink className="text-2xl" />
                </div>
                <div className="w-full md:w-[270px]  bg-zinc-950 text-white p-4 flex justify-between items-center rounded-md shadow-md">
                  <span>
                    Paid
                    <span className="block mt-2 text-yellow-500">
                      ₹ 15,60,000
                    </span>
                  </span>
                  <HiExternalLink className="text-2xl text-yellow-500" />
                </div>
                <div className="w-full md:w-[270px]  bg-zinc-950 text-white p-4 flex justify-between items-center rounded-md shadow-md">
                  <span>
                    Unpaid
                    <span className="block mt-2 text-cyan-400">
                      ₹ 26,00,000
                    </span>
                  </span>
                  <HiExternalLink className="text-2xl text-cyan-400" />
                </div>
                <div className="w-full md:w-[270px] bg-zinc-950 text-white p-4 flex justify-between items-center rounded-md shadow-md">
                  <span>
                    Overdue
                    <span className="block mt-2 text-pink-500">
                      ₹ 10,40,000
                    </span>
                  </span>
                  <HiExternalLink className="text-2xl text-pink-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Request Payment Button */}
          <div className="w-full lg:w-auto lg:mt-6 flex lg:justify-end h-[50px] ml-2 mt-2">
            <button className="text-red-500 px-2 py-2 rounded-md shadow-md text-lg font-medium border-2 border-red-500">
              Request Payment
            </button>
          </div>
        </div>

        {/* Credit and Chart Section */}
        <div className="flex flex-wrap gap-6 mt-6 lg:ml-[115px]">
          <div className="h-auto w-full lg:w-[530px] md:w-[530px] bg-stone-800 p-4 rounded-lg shadow-lg">
            <h1 className="text-white font-bold text-lg mb-4 border-gray-600 pb-2 flex items-center">
              Debit History
              <HiArrowsExpand className="ml-2 text-lg" />
            </h1>
            <div className="h-[400px] overflow-y-scroll no-scrollbar rounded-lg">
              {Array(15)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-zinc-950 text-gray-200 p-4 mb-2 rounded-md shadow-md flex justify-between items-center"
                  >
                    <span>Ramakant Sharma</span>
                    <span className="font-bold text-red-500">
                      ₹ 1,56,000
                    </span>
                    <CgMoreVertical />
                  </div>
                ))}
            </div>
          </div>
          <div className="h-[330px] w-full md:w-[530px] sm:w-[530px]  bg-stone-800 p-4 rounded-lg shadow-lg">
            <h1 className="text-white font-bold text-lg mb-4 border-gray-600 pb-2">
              Debit Graph
            </h1>
            <ResponsiveContainer width="100%" height="90%">
              <AreaChart data={chartData}>
                <CartesianGrid stroke="#444" />
                <XAxis dataKey="name" tick={{ fill: "#aaa" }} interval={0} />
                
                <defs>
                    <linearGradient
                      id="gradientFill"
                      x1="1"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#43F58A" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#42FFB0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#42FFB0"
                  strokeWidth={2}
                  fill="url(#gradientFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Debit;