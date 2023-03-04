import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className=" max-w-screen-sm bg-white mx-auto">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content max-w-full max flex justify-start">
          <label htmlFor="my-drawer" className="drawer-button py-5 px-3">
            <img src="https://cdn-icons-png.flaticon.com/24/482/482631.png" />
          </label>
          <label className=" py-5 px-3">
            <img src="https://cdn-icons-png.flaticon.com/24/482/482631.png" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Orders</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
