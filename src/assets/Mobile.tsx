import React from "react";

const Mobile = ({ width = 17, height = 18, stroke = "#346EF1", fill ,onClick }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 17 18"
      fill="none"
      className=" p-1"
      onClick={onClick}
    >
      <rect
        x="3.93726"
        y="2.12514"
        width="9.02344"
        height="13.75"
        rx="2.75"
        stroke={stroke}
        stroke-width="1.03125"
      />
      <path
        d="M7.37512 13.2969H9.30872"
        stroke={stroke}
        stroke-width="1.03125"
      />
    </svg>
  );
};

export default Mobile;
