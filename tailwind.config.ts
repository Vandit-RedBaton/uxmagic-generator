import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#306FCB",
        secondary : "#091E42",
        notActive : "#C2C2C2",
      },
      boxShadow: {
        "componentShadow" : "0px 4px 16px 0px #C9D8FF80"
      },
      backgroundColor: {
         navbar : "#091E42",
         componentHover : "#D9D9D980"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         betaBanner : "linear-gradient(90deg, #FFF3FE 0%, #DFD8FE 50%, #E4E7FF 100%)",
         gradientButton : " linear-gradient(to right, #DC79FF, #256BFA)"
      },
    },
  },
  plugins: [],
};
export default config;
