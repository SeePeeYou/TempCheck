/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7052F2",

          secondary: "#7052F2",

          accent: "#857E61",

          neutral: "#F8F8FB",

          "base-100": "#F8F8FB",

          info: "#0000ff",

          success: "#059669",

          warning: "#f0ad4e",

          error: "#bb2124",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
