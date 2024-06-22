"use client";
import styles from "./cardGradient.module.css";
import styles2 from "../ListGradient/gradient.module.css";
import { useState } from "react";
const CardGradient = () => {
  const [blurheight, setBlurheight] = useState("100%");
  return (
    <div
      className="w-96 h-[484px]  rounded-2xl flex justify-center items-end shadow-xl  relative z-20 "
      style={{
        backgroundImage: "url('https://picsum.photos/800/800')",
        backgroundSize: "cover", // Cover the entire page
        backgroundPosition: "center", // Center the background image
        // zIndex: -1, // Behind the content
      }}
    >
      <div className="absolute -bottom-20 z-20 text-white">
        <h1 className="font-semibold text-[26px] tracking-[-1px] text-balance  text-center">
          Gradient blur
        </h1>
        <div className="w-full flex gap-x-6">
          <span
            className={`cursor-pointer rounded-sm bg-white/60 w-8 text-center text-sm ${
              blurheight === "16.66666666666667%"
                ? "bg-gray-700 text-white"
                : "text-black"
            }`}
            onClick={() => setBlurheight("16.66666666666667%")}
          >
            1/6
          </span>
          <span
            className={`cursor-pointer rounded-sm bg-white/60 w-8 text-center text-sm ${
              blurheight === "33.33333333333334%"
                ? "bg-gray-700 text-white"
                : "text-black"
            }`}
            onClick={() => setBlurheight("33.33333333333334%")}
          >
            2/6
          </span>
          <span
            className={`cursor-pointer rounded-sm bg-white/60 w-8 text-center text-sm ${
              blurheight === "50%" ? "bg-gray-700 text-white" : "text-black"
            }`}
            onClick={() => setBlurheight("50%")}
          >
            3/6
          </span>
          <span
            className={`cursor-pointer rounded-sm bg-white/60 w-8 text-center text-sm ${
              blurheight === "66.66666666666667%"
                ? "bg-gray-700 text-white"
                : "text-black"
            }`}
            onClick={() => setBlurheight("66.66666666666667%")}
          >
            4/6
          </span>
          <span
            className={`cursor-pointer rounded-sm bg-white/60 w-8 text-center text-sm ${
              blurheight === "83.33333333333334%"
                ? "bg-gray-700 text-white"
                : "text-black"
            }`}
            onClick={() => setBlurheight("83.33333333333334%")}
          >
            5/6
          </span>
          <span
            className={`cursor-pointer rounded-sm bg-white/60 w-8 text-center text-sm ${
              blurheight === "100%" ? "bg-gray-700 text-white" : "text-black"
            }`}
            onClick={() => setBlurheight("100%")}
          >
            full
          </span>
        </div>
      </div>

      {/* <div
        className={`absolute w-full h-1/2 backdrop-blur-sm ${styles.mask} flex justify-center items-center `}
      ></div> */}
      <div
        className={`absolute w-full rounded-2xl overflow-hidden ${styles2.gradientBlur} z-10 `}
        style={{
          height: blurheight,
          transition: "height 0.5s",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CardGradient;
