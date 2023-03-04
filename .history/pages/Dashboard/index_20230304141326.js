import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className=" max-w-screen-sm bg-white mx-auto">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="bg-gray max-w-full max-h-fit flex justify-start py-1.8 border-b-2">
            <label htmlFor="my-drawer" className="drawer-button py-5 px-6">
              <img src="https://cdn-icons-png.flaticon.com/24/7588/7588955.png" />
            </label>
            <label className=" py-5 px-3">
              <img src="https://cdn-icons-png.flaticon.com/24/482/482631.png" />
            </label>
          </div>
        </div>
        <div className="drawer-side bg-white mt-20">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white text-black">
            <li>
              <Link href="">Dashboard</Link>
            </li>
            <li>
              <Link href="">Orders</Link>
            </li>
            <li>
              <Link href="">Products</Link>
            </li>
            <li>
              <Link href="">Categories</Link>
            </li>
            <li>
              <Link href="">Customers</Link>
            </li>
            <li>
              <Link href="">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
