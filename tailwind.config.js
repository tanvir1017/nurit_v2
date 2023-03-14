/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    primaryRed: "rgba(var(--red-primary-brand-color), 1)",
    primaryBlack: "rgba(var(--black-primary-brand-color), 1)",
  },
  theme: {
    extend: {
      fontFamily: {
        HSBold: "HindSiliguriBold",
        HSLight: "HindSiliguriLight",
        HSMedium: "HindSiliguriMedium",
        HSRegular: "HindSiliguriRegular",
        HSSemiBold: "HindSiliguriSemiBold",
      },
    },
  },
  plugins: [],
};
