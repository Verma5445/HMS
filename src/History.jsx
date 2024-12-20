import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { HiArrowsExpand } from "react-icons/hi";
import { CgMoreVertical } from "react-icons/cg";
import { RiApps2Fill } from "react-icons/ri";
import {TbHomeCheck,TbHomeMove,TbDeviceMobileCharging,} from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import { MdAccessAlarm } from "react-icons/md";
import { BiSolidTrafficCone } from "react-icons/bi";
import {AreaChart,Area,ResponsiveContainer,XAxis,CartesianGrid,Tooltip,} from "recharts";
import { ImEnlarge } from "react-icons/im";

const chartData = [
  { name: "Mar", value: 110 },
  { name: "Apr", value: 80 },
  { name: "May", value: 90 },
  { name: "Jun", value: 60 },
  { name: "Jul", value: 70 },
  { name: "Aug", value: 55 },
];

const History = () => {
  return (
    <div className="flex bg-black">
      {/* Sidebar */}
      <nav className="h-auto md:h-[800px] w-[220px] bg-stone-800 text-white fixed top-0 left-0 p-4 ml-3 mt-2 md:mt-0 mb-6">
        <ul className="space-y-4">
          <li className="flex items-center space-x-1">
            <RiApps2Fill className="text-lg" />
            <span className="text-xs md:text-sm">Dashboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <TbHomeCheck className="text-lg" />
            <span className="text-xs md:text-sm">Credit</span>
          </li>
          <li className="flex items-center space-x-2">
            <TbHomeMove className="text-lg" />
            <span className="text-xs md:text-sm">Debit</span>
          </li>
          <li className="flex items-center space-x-2">
            <IoMdTimer className="text-lg" />
            <span className="text-xs md:text-sm">Vendors</span>
          </li>
          <li className="flex items-center space-x-2">
            <TbDeviceMobileCharging className="text-lg" />
            <span className="text-xs md:text-sm">Orders</span>
          </li>
          <li className="flex items-center space-x-2">
            <BiSolidTrafficCone className="text-lg" />
            <span className="text-xs md:text-sm">Expected</span>
          </li>
          <li className="flex items-center space-x-2">
            <MdAccessAlarm className="text-lg" />
            <span className="text-xs md:text-sm">Overdue</span>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-full p-4 lg:ml-[100px] h-auto lg:h-screen">
        {/* Collection Section */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full lg:w-[650px] bg-stone-800 p-4 rounded-md shadow-md flex flex-col md:flex-row items-start md:items-center">
            {/* Collection Info */}
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="font-bold text-gray-200">Expenses</h3>
                <ImEnlarge className="ml-4 h-7 text-[12px] text-white" />
              </div>

              <div
                className="w-32 h-32 mt-4 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "conic-gradient(#FF10F0 0% 25%, #00FFFF 25% 75%, #FFFF00 75% 100%)",
                }}
              >
                <div className="w-20 h-20 rounded-full bg-stone-800 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">50%</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 md:mt-0 md:ml-8 w-full">
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Total Expense", amount: "₹ 52,00,000" },
                  { label: "Paid", amount: "₹ 15,60,000", color: "text-yellow-500" },
                  { label: "Unpaid", amount: "₹ 26,00,000", color: "text-cyan-400" },
                  { label: "Overdue", amount: "₹ 10,40,000", color: "text-pink-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`w-full sm:w-[200px] bg-zinc-950 text-white p-2 text-xs h-[60px] flex justify-between items-center rounded-lg`}
                  >
                    <span>
                      {item.label}
                      <span className={`block mt-2 ${item.color || ""}`}>
                        {item.amount}
                      </span>
                    </span>
                    <HiExternalLink className={`text-xl ${item.color || ""}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 w-full md:w-auto">
            <button className="px-8 py-4 border-2 border-[#FF3939] text-[#FF3939] rounded-md shadow">
              Make Payout
            </button>
          </div>
        </div>

        <div className="flex flex-wrap lg:ml-[260px] p-4">
          {/* Credit Section with Chart */}
          <div className="flex flex-wrap justify-center lg:justify-between gap-6 mt-6 w-full">
            <div className="h-auto w-full md:w-[440px] bg-stone-800 p-4 rounded-lg shadow-lg">
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
                      <span className="font-bold text-red-500">₹ 1,56,000</span>
                      <CgMoreVertical />
                    </div>
                  ))}
              </div>
            </div>

            <div className="h-auto w-full md:h-[380px] md:w-[510px] lg:mr-[115px] bg-stone-800 p-4 rounded-lg shadow-lg">
              <h1 className="text-white font-bold text-lg mb-4 border-gray-600 pb-2">
                Debit Graph
              </h1>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid stroke="#444" />
                    <XAxis dataKey="name" tick={{ fill: "#aaa" }} interval={0} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#333", border: "none" }}
                      labelStyle={{ color: "#fff" }}
                      itemStyle={{ color: "#fff" }}
                    />
                    <defs>
                      <linearGradient id="gradientFill" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#43F58A" stopOpacity={0.8} />
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
      </div>
    </div>
  );
};

export default History;
