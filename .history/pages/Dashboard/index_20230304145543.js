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
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Pick your favorite Simpson
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
