/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "640px" }, // Applies up to 640px
        tablet: { max: "1300px" }, // Applies up to
      },
      keyframes: {
        slide_right_center: {
          "0%": { transform: "translateX(30%)" }, // Starts from the right
          "100%": { transform: "translateX(0)" }, // Ends at the center
        },
        slide_left_center: {
          "0%": { transform: "translateX(-30%)" }, // Starts from the left
          "100%": { transform: "translateX(0)" }, // Ends at the center
        },
        slide_top_center: {
          "0%": { transform: "translateY(-30%)" }, // Starts from the top
          "100%": { transform: "translateY(0)" }, // Ends at the center
        },
        slide_bottom_center: {
          "0%": { transform: "translateY(30%)" }, // Starts from the bottom
          "100%": { transform: "translateY(0)" }, // Ends at the center
        },
      },
      animation: {
        slide_right_center: "slide_right_center 1s ease-in-out ", // Duration and easing
        slide_left_center: "slide_left_center 1s ease-in-out ", // Duration and easing
        slide_top_center: "slide_top_center 1s ease-in-out ", // Duration and easing
        slide_bottom_center: "slide_bottom_center 1s ease-in-out ", // Duration and easing
      },
    },
  },
  plugins: [],
};
