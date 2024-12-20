import React from "react";
import { CgMoreVertical } from "react-icons/cg";
import { FaCompressArrowsAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Debit_History() {
  const debitHistory = new Array(30).fill(null).map((_, index) => ({
    name: `Ramakant Sharma`,
    amount: `₹1,56,000`,
    date: `12 Feb 2023`,
    remark: index % 2 === 0 ? "Salary" : "Order Payment",
    contactNo: "9876543210",
  }));

  return (
    <div className="bg-[#000000] min-h-screen p-4">
      <div className="bg-[#202020] min-h-[calc(100vh-32px)] max-w-full sm:w-[900px] mx-auto text-gray-200 p-4 rounded-lg pb-8">
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between mb-5 gap-4">
          <div className="flex items-center gap-2">
            <h3 className="text-[16px] sm:text-[18px] font-semibold">Debit History</h3>
            <button>
              <FaCompressArrowsAlt className="text-white" />
            </button>
          </div>

          {/* Export and Entries Section */}
          <div className="flex flex-wrap items-center gap-2">
            <button className="bg-[#20744A] flex items-center px-3 py-2 rounded-md hover:bg-[#185c38] transition text-sm">
              <img
                className="h-4 mr-2"
                src="public/vscode-icons_file-type-excel2.png"
                alt="Export"
              />
              Export Data
            </button>

            <div className="flex items-center gap-2">
              <p className="text-sm hidden sm:block">Entries/Page:</p>
              <select className="bg-black text-white rounded-md px-2 py-1 text-sm">
                <option>10</option>
                <option>50</option>
                <option>100</option>
                <option>500</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table Headers */}
        <div className="hidden sm:flex text-white text-[14px] border-b border-gray-600 pb-3">
          <h4 className="w-1/5 text-left">Name</h4>
          <h4 className="w-1/5 text-center">Amount</h4>
          <h4 className="w-1/5 text-center">Date</h4>
          <h4 className="w-1/5 text-center">Remark</h4>
          <h4 className="w-1/5 text-center">Contact No.</h4>
        </div>

        {/* Table Rows */}
        <div className="overflow-y-auto max-h-[calc(110vh-300px)] no-scrollbar">
          {debitHistory.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap sm:flex-nowrap items-center p-3 mb-2 rounded-lg bg-[#000000]"
            >
              {/* Mobile View */}
              <div className="sm:hidden w-full text-[14px]">
                <p className="mb-1">
                  <span className="font-semibold">Name:</span> {item.name}
                </p>
                <p className="mb-1 text-[#FF3939]">
                  <span className="font-semibold">Amount:</span> {item.amount}
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Date:</span> {item.date}
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Remark:</span> {item.remark}
                </p>
                <p>
                  <span className="font-semibold">Contact:</span> {item.contactNo}
                </p>
              </div>

              {/* Desktop View */}
              <p className="hidden sm:block w-1/5 text-left text-[14px]">{item.name}</p>
              <p className="hidden sm:block w-1/5 text-center text-[14px] text-[#FF3939]">
                {item.amount}
              </p>
              <p className="hidden sm:block w-1/5 text-center text-[14px]">{item.date}</p>
              <p className="hidden sm:block w-1/5 text-center text-[14px]">{item.remark}</p>
              <p className="hidden sm:block w-1/5 text-center text-[14px]">
                {item.contactNo}
              </p>

              {/* Action Button */}
              <button className="ml-auto sm:ml-0 mt-3 sm:mt-0">
                <CgMoreVertical className="h-5 hover:opacity-80 transition"/>
                {/* <img
                  className="h-5 hover:opacity-80 transition"
                   
                  src="src/assets/Group 204.png"
                  alt="action"
                /> */}
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex flex-wrap justify-center items-center mt-[25px] text-[13px] space-x-2 md:space-x-4">
          <FaArrowLeft className="sm:inline" />
          <span className=" sm:inline">prev.</span>
          <span className="bg-[#000000] text-white px-2 py-1 rounded">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span className="hidden sm:inline">5</span>
          <span className=" sm:inline">.............</span>
          <span className="sm:inline">97</span>
          <span className=" sm:inline">98</span>
          <span className=" sm:inline">99</span>
          <span>Next</span>
          <FaArrowRight className=" sm:inline" />
        </div>
      </div>
    </div>
  );
}

export default Debit_History;
