/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {

        slidein: {
          from: {
            opacity: "0",
            transform: "translateX(-100px)",

          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
      },
      
      animation: {
        slidein: "slidein 2s ease 400ms"
      }
    },
    fontFamily: {
      jp: ["Great Vibes"],
      jpr: ["MuseoModerno"],
      rjp: ['sans-serif']
    },
  },
  plugins: [],
}

