import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import dataJson from "../FrontEndMentor/data.json";

function Task1_Filter() {
  const [mode, setMode] = useState(false);
  const [filter, setFilter] = useState("all");

  const [data, setData] = useState(dataJson);
  const toggleStatus = (index) => {
    const updatedData = [...data];
    updatedData[index].isActive = !updatedData[index].isActive;
    setData(updatedData);
  };
  const filteredData = data.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true;
  });
  const removeItem = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div
      className={`p-20 pt-5 flex flex-col items-center gap-2  ${
        mode ? "bg-gray-800" : "bg-gray-50"
      }  ${mode ? "text-white" : "text-gray-900"} w-full h-full`}
    >
      <header
        className={`flex w-full max-w-7xl mx-auto rounded-xl  ${
          mode ? "border border-white" : ""
        } justify-between shadow-lg p-2 pr-4 rounded-2  ${
          mode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <img src={logo} className={`fill=${mode ? "#fffff" : ""}`} alt="logo" />
        <button
          onClick={() => setMode(!mode)}
          className={`rounded-xl p-2 ${mode ? "bg-gray-500" : "bg-gray-50"}`}
        >
          <img src={mode ? sun : moon} alt="" />
        </button>
      </header>

      <div>
        <header className=" flex lg:flex-row flex-col items-center lg:justify-between pt-5 p-2 lg:gap-0 gap-4 max-w-7xl">
          <h1 className="lg:text-3xl md:text-2xl text-3xl  font-bold relative lg:left-4">
            Extension List
          </h1>
          <div className="flex justify-around gap-5 ">
            <button
              onClick={() => setFilter("all")}
              className={`${filter == "all" ? "bg-red-400 text-white" : ""} ${
                mode ? " shadow-white shadow" : ""
              } p-0.5 px-3 rounded-full text-base   shadow`}
            >
              All
            </button>
            <button
              onClick={() => {
                setFilter("active");
              }}
              className={`${
                filter == "active" ? "bg-red-400 text-white" : ""
              }  text-base  ${
                mode ? " shadow-white shadow" : ""
              } p-0.5 px-3 rounded-full shadow `}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("inactive")}
              className={` ${
                filter == "inactive" ? "bg-red-400 text-white" : ""
              }  text-base ${
                mode ? " shadow-white shadow" : ""
              } p-0.5 px-3 rounded-full shadow `}
            >
              Inactive
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:p-5 place-items-center">
          {filteredData.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-end ${
                  mode ? "border border-white" : "border"
                } rounded-xl w-full lg:max-w-sm md:max-w-lg`} // max-w-sm ensures a consistent card size
              >
                <div className="flex gap-2  rounded-md p-4">
                  <img
                    src={new URL(item.logo, import.meta.url).href}
                    alt="icon"
                    className="h-14"
                  />
                  <div>
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 pt-3">
                  <button
                    onClick={() => removeItem(index)}
                    className="rounded-2xl font-medium border p-2 px-3 text-sm shadow-2xl"
                  >
                    Remove
                  </button>

                  <div
                    onClick={() => toggleStatus(index)}
                    className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                      item.isActive ? "bg-red-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                        item.isActive ? "translate-x-4" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Task1_Filter;
