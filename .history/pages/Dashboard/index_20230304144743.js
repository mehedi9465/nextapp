import Navbar from "@/Components/Navbar";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}

      <div className="max-w-screen-sm bg-stone-100 text-black">
        <div className="flex">
          <p className="text-size-10">
            <span className="text-stone-500">Welcome</span> Aripul 👋
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default index;
