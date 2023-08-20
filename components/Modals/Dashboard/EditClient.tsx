import Spinner from "@/components/Spinner";
import { Client } from "@/types/Client";
import React, { useState } from "react";

import { BsX } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";

export default function EditClient({
  isOpen,
  setter,
  isLoading,
  onSubmit,
  client_details,
}: any) {
  const [_client_details, setClientDetails] = useState<Client>(client_details);

  if (isOpen === false) {
    return <></>;
  }

  return (
    <div className="fixed z-40 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" overflow-x-hidden overflow-y-auto fixed w-full h-full inset-0 z-50 outline-none focus:outline-none">
        <div className=" mx-auto w-full max-w-4xl flex items-center justify-center min-h-screen ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between px-4 py-2 border-b border-solid bg-[#F4F6FA] border-slate-200 rounded-t-[8px]">
              <h5 className="font-monts font-bold text-sm text-darkerGray">
                Edit Client
              </h5>
              <BsX className="flex w-4 h-4 object-contain" onClick={setter} />
            </div>
            {/*body*/}
            <div className="relative px-6 overflow-y-auto flex-col">
              <div className="flex flex-col space-y-6 ">
                <h6 className="mt-6 font-monts font-bold text-sm text-darkerGray">
                  Client Information:
                </h6>
                <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6">
                  <div className="flex flex-col gap-2 lg:w-1/3">
                    <h6 className="font-monts font-bold text-sm text-darkerGray">
                      Name
                    </h6>
                    <input
                      type="text"
                      value={_client_details.name}
                      onChange={(e) => {
                        setClientDetails({
                          ..._client_details,
                          name: e.target.value,
                        });
                      }}
                      className="block appearance-none w-full text-gray border bg-white border-[#D5D7D8] rounded-lg font-monts font-medium text-sm text-[#7C7C7C] h-fit p-2.5 pr-6 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:w-1/3">
                    <h6 className="font-monts font-bold text-sm text-darkerGray">
                      Email
                    </h6>
                    <input
                      type="text"
                      value={_client_details.email}
                      onChange={(e) => {
                        setClientDetails({
                          ..._client_details,
                          email: e.target.value,
                        });
                      }}
                      className="block   appearance-none w-full text-gray border bg-white border-[#D5D7D8] rounded-lg font-monts font-medium text-sm text-[#7C7C7C] h-fit p-2.5 pr-6 outline-none"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2 lg:w-1/4">
                    <h6 className="font-monts font-bold text-sm text-darkerGray">
                      Type
                    </h6>
                    <div className="w-full relative">
                      <select
                        className="block cursor-pointer appearance-none w-full text-gray border bg-white border-[#D5D7D8] rounded-lg font-monts font-medium text-sm text-[#7C7C7C] h-fit p-2.5 pr-6 outline-none"
                        id="MOI"
                        value={_client_details.type}
                        onChange={(e) => {
                          setClientDetails({
                            ..._client_details,
                            type: e.target.value,
                          });
                        }}
                        aria-label="MOI"
                      >
                        <option value="Higher Educational Institution">
                          HEI
                        </option>
                        <option value="Establishment">Establishment</option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <RiArrowDownSFill className="flex w-4 h-4 object-contain  " />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-full flex flex-col gap-2">
                    <h6 className="font-monts font-bold text-sm text-darkerGray">
                      Address
                    </h6>
                    <input
                      value={_client_details.address}
                      onChange={(e) => {
                        setClientDetails({
                          ..._client_details,
                          address: e.target.value,
                        });
                      }}
                      type="text"
                      className="block appearance-none w-full text-gray border bg-white border-[#D5D7D8] rounded-lg font-monts font-medium text-sm text-[#7C7C7C] h-fit p-2.5 pr-6 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end py-4 p-6 rounded-b">
              <button
                className="background-transparent outline-none focus:outline-none py-2 px-4 font-monts font-semibold text-sm text-[#C4C5C5]"
                type="button"
                onClick={setter}
              >
                Cancel
              </button>
              <button
                className={`${
                  isLoading ? "flex items-center gap-0.5" : ""
                } py-2 px-4 font-monts font-semibold text-sm text-white bg-[#3C6497] rounded-lg outline-none`}
                type="button"
                onClick={() => onSubmit(_client_details)}
              >
                {isLoading ? (
                  <>
                    <Spinner />
                    Updating inspection...
                  </>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
