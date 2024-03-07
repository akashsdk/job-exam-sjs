import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" p-4 rounded shadow-md">
        <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Sorry, the page you visited does not exist.
        </p>
        <Link
          className="inline-block px-4 mt-[20px] py-2 border-2 border-solid border-[#44D241] text-[#44D241] rounded hover:bg-#44D241 hover:text-white transition-all duration-300"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
