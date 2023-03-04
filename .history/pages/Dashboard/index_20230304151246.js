import Navbar from "@/Components/Navbar";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}

      <div className="max-w-screen-sm mx-auto bg-stone-100 text-black">
        <div className="flex justify-center py-2">
          <p className="text-5xl mx-3">
            <span className="text-stone-500">Welcome</span> Aripul 👋
          </p>
          <select className="select select-bordered text-2xl max-w-xs bg-stone-100 outline-0 mx-3">
            <option disabled selected>
              Select
            </option>
            <option>Today</option>
            <option>Yesterday</option>
          </select>
        </div>
        <div className="flex justify-center mar">
          <div className="border-2">
            <p className="uppercase text-stone-600 font-normal">Orders</p>
            <p className="text-5xl font-bold">239</p>
          </div>
          <div className="border-2">
            <p className="uppercase text-stone-600 font-normal">Orders</p>
            <p className="text-5xl font-bold">239</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default index;
