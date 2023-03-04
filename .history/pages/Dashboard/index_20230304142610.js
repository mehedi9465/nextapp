import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className=" max-w-screen-sm bg-white mx-auto">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="bg-gray max-w-full max-h-fit flex justify-start py-1.5 border-b-2">
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
            <li className="">
              <Link href="">
                <img src="https://i.ibb.co/QfM6kK3/box.png" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="https://i.ibb.co/PYqfksZ/delivered.png" />
                Orders
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="https://i.ibb.co/k6LvMk1/folder.png" />
                Products
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="https://i.ibb.co/QfM6kK3/box.png" />
                Categories
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="https://i.ibb.co/QfM6kK3/box.png" />
                Customers
              </Link>
            </li>
            <li>
              <Link href="">
                <img src="https://i.ibb.co/QfM6kK3/box.png" />
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
