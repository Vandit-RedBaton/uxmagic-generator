import React from "react";
import GradientButton from "../GradientButton";

const BottomBar = () => {
  return (
    <div className="flex justify-between items-center bg-secondary w-full fixed bottom-0 text-white p-2">
      Get more components at $5
      <GradientButton onClick={() => {console.log(process.env.API_URL)}}>Get Started</GradientButton>
    </div>
  );
};

export default BottomBar;
