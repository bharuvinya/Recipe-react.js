/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
   
    extend: {
      colors: {
      hoverColor: "#ed8791",
      brightColor: "#dd8036",
      backgroundColor: "#0375ad",
    },
  },
  },
  plugins: [],
}

