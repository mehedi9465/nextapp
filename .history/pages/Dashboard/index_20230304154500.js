import Navbar from "@/Components/Navbar";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}

      <div className="max-w-screen-sm mx-auto bg-stone-100 text-black overflow-hidden">
        <div className="flex justify-center py-2 my-9">
          <p className="text-4xl mx-4">
            <span className="text-stone-500">Welcome</span> Aripul 👋
          </p>
          <select className="select select-bordered text-xl max-w-xs bg-stone-100 outline-0 mx-4">
            <option disabled selected>
              Select
            </option>
            <option>Today</option>
            <option>Yesterday</option>
          </select>
        </div>
        <div className="flex justify-center my-9">
          <div className="border-2 rounded-2xl justify-start mx-5 px-10 py-5">
            <p className="uppercase text-stone-600 font-normal text-xl">
              Orders
            </p>
            <p className="text-6xl font-bold">239</p>
          </div>
          <div className="border-2 rounded-2xl justify-start mx-5 px-10 py-5 text-left">
            <p className="uppercase text-stone-600 font-normal text-xl">
              Total Sales
            </p>
            <p className="text-6xl font-bold">25 791 <span className="display">BDT</span></p>
          </div>
        </div>
        <div className="flex justify-center my-9">
          <div className="border-2 rounded-2xl justify-start mx-5 px-10 py-5">
            <p className="uppercase text-stone-600 font-normal text-xl">
              Orders
            </p>
            <p className="text-6xl font-bold">239</p>
          </div>
          <div className="border-2 rounded-2xl justify-start mx-5 px-10 py-5 text-left">
            <p className="uppercase text-stone-600 font-normal text-xl">
              Orders
            </p>
            <p className="text-6xl font-bold">239</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
