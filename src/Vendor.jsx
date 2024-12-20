import React from "react";

function Vendor() {
  return (
    <div className="bg-[#000000] p-4 md:p-10 flex-1 h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl text-gray-200 font-semibold montserrat">
            Vendors
          </h1>
          <p className="text-gray-300 pt-3 text-sm md:text-base">
            Showing total <span className="text-yellow-400">985</span> Vendors
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-400">
            +Add Vendor
          </button>
        </div>
      </div>
      <div className="bg-[#202020] p-4 md:p-8 rounded-md shadow-md mt-6 w-full max-w-[1100px]">
        <span className="text-sm md:text-md text-gray-300 font-medium block md:inline">
          Naraymurthy Furn...
        </span>
        <span className="text-sm md:text-md text-gray-300 block md:inline md:ml-[250px] mt-2 md:mt-0">
          ₹ 56,852
        </span>
      </div>
    </div>
  );
}

export default Vendor;
