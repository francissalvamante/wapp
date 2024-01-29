import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'body-background': "url('/background.jpg')",
      },
      colors: {
        'gray-custom': 'rgb(246, 246, 248)'
      },
      scale: {
        '200': '2.0',
        '250': '2.5'
      }
    },
  },
  plugins: [],
};
export default config;
