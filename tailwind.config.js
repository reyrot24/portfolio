/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softerBrown: "#7C5835",
        softBrown: "#66442C",
        brown: "#4c2b21",
        darkBrown: "#2E1915",
        darkerBrown: "#0F080E",
        black: "#0A0A0A",
        white: "#E7DECC",
      },
      fontSize: {
        sectionTitle: "4rem" /*96px */,
        logo: "2.25rem" /*36px */,
        buttonText: "1.5rem" /*24px */,
        title: "1.75rem" /*28px */,
        navTitle: "2rem" /*32px */,
        title2: "1.5rem" /*24px */,
        normalText: "1.30rem" /* 20px */,
      },
      fontFamily: {
        playfair: "var(--font-playfair)",
        playfairSC: "var(--font-playfair-sc)",
      },
      boxShadow: {
        md: "0 35px 60px -15px",
        lg: "0px 0px 10px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply text-[2rem] md:text-[2.75rem]  lg:text-[3.5rem] xl:text-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.5rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply text-lg leading-normal": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1.25rem] md:leading-[1.75rem] lg:text-[1.75rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply text-[0.875rem] leading-5 md:text-[1.25rem]": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-light text-xs uppercase": {},
        },
        ".quote": {
          "@apply text-lg leading-normal": {},
        },
        ".button": {
          "@apply text-sm md:text-[1.5rem] md:leading-[2.5rem] lg:text-[1.75rem] tracking-wider px-2 py-1":
            {},
        },
      });
    }),
  ],
};
