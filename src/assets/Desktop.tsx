import React from "react";

const Desktop = ({ width = 17 , height = 16 , stroke = "#346EF1" ,fill , onClick } : any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 17 16"
      fill="none"
      className="p-1"
      onClick={onClick}
    >
      <rect
        x="3.01562"
        y="3.1875"
        width="11.0938"
        height="8.07031"
        rx="2.01953"
        stroke={stroke}
      />
      <path d="M8.5625 11.7578V13.2695" stroke={stroke}/>
      <path
        d="M5.53906 13.2695H11.5859"
        stroke={stroke}
        stroke-linecap="round"
      />
      <path d="M3.01953 9.23828H14.1055" stroke={stroke} />
    </svg>
  );
};

export default Desktop;
