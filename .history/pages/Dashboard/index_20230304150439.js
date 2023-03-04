import Navbar from "@/Components/Navbar";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}

      <div className="max-w-screen-sm mx-auto bg-stone-100 text-black">
        <div className="flex justify-center py-2">
          <p className="text-2xl m">
            <span className="text-stone-500">Welcome</span> Aripul 👋
          </p>
          <select className="select select-bordered max-w-xs bg-stone-100 outline-0 m">
            <option disabled selected>
              Select
            </option>
            <option>Today</option>
            <option>Yesterday</option>
          </select>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default index;