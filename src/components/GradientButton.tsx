import React from "react";

const GradientButton = ({ onClick, children }: any) => {
  return (
    <div className="gradientButtonBg">
      <button
        onClick={onClick}
        className={`gradientButton text-white px-3 rounded-md bg-secondary cursor-pointer `}
      >
        {children}
      </button>
    </div>
  );
};

export default GradientButton;
