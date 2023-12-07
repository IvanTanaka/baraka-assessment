import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background-primary": "#fff",
      "background-tertiriary": "#f2f2f2",
      content: {
        100: "#000000",
        50: "#00000050",
        30: "#00000030",
      },
    },
    extend: {
      darkmode: 'false',
      backgroundColor: {
        "white-100": "#ffffff",
      },
      fontSize: {
        h1: "3rem",
        h2: "2.5rem",
        h3: "2rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
