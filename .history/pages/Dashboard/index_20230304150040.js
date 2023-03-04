import Navbar from "@/Components/Navbar";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}

      <div className="max-w-screen-sm mx-auto bg-stone-100 text-black">
        <div className="flex justify-center">
          <p className="text-2xl">
            <span className="text-stone-500">Welcome</span> Aripul 👋
          </p>
          <select className="select max-w-xs bg-stone-100 border border-1 outline-stone-100 outline outline-offset-1 outline-1">
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
