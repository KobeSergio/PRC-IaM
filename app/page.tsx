"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   alert(`Submitting: ${inputValue}, ${password}`);
  // };onSubmit={handleSubmit}

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col w-full lg:w-4/12 px-6 py-12 lg:py-24">
        <h2 className="font-monts font-medium text-xl text-darkerGray text-center">
          Sign in your institution&apos;s account.
        </h2>
        <form  className="max-w-lg mx-auto p-4 mt-6">
          <div className="flex items-center border-2 border-[#CED4DA] px-4 py-2 rounded-lg">
            <span>
              <Image
                src={"assets/icons/envelope.svg"}
                width={18}
                height={18}
                alt={"envelope icon"}
              />{" "}
            </span>
            <input
              className="appearance-none bg-transparent border-none w-full font-monts font-medium text-sm text-darkerGray ml-2 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Email address"
              aria-label="Email address"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center border-2 border-[#CED4DA] px-4 py-2 rounded-lg mt-4">
            <span>
              <Image
                src={"assets/icons/key.svg"}
                width={18}
                height={18}
                alt={"envelope icon"}
              />{" "}
            </span>
            <input
              className="appearance-none bg-transparent border-none w-full font-monts font-medium text-sm text-darkerGray ml-2 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-end items-center mt-4">
            <h4 className="font-monts font-medium text-xs italic text-primaryBlue hover:underline underline-offset-4 cursor-pointer">
              Forgot password?
            </h4>
          </div>
          <Link href="/profile">
          <button
            className="w-full bg-primaryBlue hover:bg-[#365592] font-monts font-semibold text-center text-sm  text-white py-3 px-5 rounded-lg mt-6"
            type="submit"
          >
            Submit
            
          </button></Link>
          <Link href="/profile">go to profile</Link>
        </form>
      </div>
      <div className="relative w-full h-fit lg:w-2/3 ">
        <Image
          src={"/assets/images/sample.png"}
          width={1200}
          height={800}
          alt={"sample picture"}
          className="object-cover object-center w-full h-[85vh] overflow-hidden"
        />
      </div>
    </div>
  );
}
