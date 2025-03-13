
import React from "react";
import { FaBox, FaHome, FaUserAlt } from "react-icons/fa";

import { GrDeliver } from "react-icons/gr";
import { HiShoppingBag } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";

function Menu() {
  return (
    <div className="fixed top-0 flex flex-col justify-between h-full items-center w-32 bg-slate-900 ">
      <div className="p-3 text-3xl border-b-2 ">
        <h1>Report</h1>
      </div>

      <div>
        <ul className="flex flex-col gap-16">
          <li className="flex flex-col btn btn-ghost  py-2 ">
            <a href="/">
              <FaHome className=" text-4xl" />
              Home
            </a>
          </li>

          <li className="flex flex-col btn btn-ghost ">
            <a href="/dashboard/report">
              <TbReportSearch className=" text-4xl" />
              Report
            </a>
          </li>

          <li className="flex flex-col btn btn-ghost ">
            <a href="/dashboard/deliver">
              <GrDeliver className=" text-4xl" />
              <span>Deliver</span>
            </a>
          </li>

          <li className="flex flex-col btn btn-ghost">
            <a href="/dashboard/sales">
              <HiShoppingBag className=" text-4xl" />
              <span>Sales</span>
            </a>
          </li>
          <li className="flex flex-col btn btn-ghost">
            <a href="/dashboard/stokbarang">
            <FaBox className=" text-4xl p-1" />
              <span>Stok</span>
            </a>
          </li>
        </ul>
      </div>

      <div >
        <div>
          <div className=" mb-5 btn btn-ghost ">
            <FaUserAlt className="text-4xl " />
          </div>
        </div>

        <div className="mb-10 btn btn-ghost ">
          <IoSettings className="text-4xl " />
        </div>

      </div>
    </div>
  );
}

export default Menu;
