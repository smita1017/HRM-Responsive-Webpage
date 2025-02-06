// export default {
//     theme: {
//       extend: {
//         fontFamily: {
//           montserrat: ["Montserrat", "sans-serif"],
//         },
//       },
//     },
//     plugins: [],
//   };
  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure React files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}