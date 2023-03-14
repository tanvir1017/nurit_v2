/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
