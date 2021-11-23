import React from "react";
import { DarkMode } from "./App";

export default function SwitchButton({ isDarkMode, changeMode }) {
  return (
    <DarkMode.Consumer>
      {(val,changeMode) => {
        console.log(val ,"kajdne",changeMode);
        return (
          <>
            <button
              className={`btn ${val ? "btn-dark" : "btn-light"}`}
              onClick={changeMode}
            >
              {val ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </>
        );
      }}
    </DarkMode.Consumer>
    // <button
    //   className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
    //   onClick={changeMode}
    // >
    //   {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    // </button>
  );
}
