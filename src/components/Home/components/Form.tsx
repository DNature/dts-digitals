"use client";

import { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import clsx from "clsx";

const formData = [
  { name: "First Name", type: "text" },
  { name: "Last Name", type: "text" },
  { name: "Comany Name", type: "text" },
  { name: "Email", type: "email" },
  { name: "Subject", type: "text" },
];

export function Form() {
  const [company, setCompany] = useState(true);

  return (
    <div
      data-aos="zoom-in-up"
      className="card max-w-xl shadow-2xl bg-white bg-opacity-40 backdrop-blur-md w-full border border-gray-200 p-4 sm:p-10 mt-28 md:mt-0"
    >
      <h4 className="text-center">First things first</h4>
      <p className="text-xl my-4 text-center w-3/4 self-center">
        Let us get to know about your project
      </p>

      {formData.map((item, idx) => (
        <input
          key={idx}
          type={item.type}
          placeholder={item.name}
          className={clsx(
            "h-12 border bg-white border-gray-400 rounded-xl px-4 mt-6"
          )}
        />
      ))}
      <textarea
        className={clsx("border bg-white border-gray-400 rounded-xl p-4 mt-6")}
        rows={4}
        placeholder="Message"
      />
      <button
        onClick={() => setCompany(true)}
        className={clsx("btn border-none outline-none mt-5 rounded-lg flex-1")}
      >
        Send Message
      </button>
    </div>
  );
}
