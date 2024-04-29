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
        primary: "#0E2920",
        primary_lite: "#1E342C",
        ms_white: "#FFF3E3",
        secondary: "#B88E2F",
        ms_text: "#FFCF8F",
      },
      boxShadow: {
        custom: "0px 1px 4px rgba(0, 0, 0, 0.28)",
      },
      screens: {
        md: "820px",
        xsm: "430px",
        mds: "550px",
        xmd: "840px",
        lg: "1150px",
      },
    },
  },
  plugins: [],
};
export default config;
