/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      "backgroundImage": {
        'heroImage': "url('/assets/dream_job.jpg')"
      }
    },
    animation: {
      "first-slide": "ease-in 3s"
    },
    keyframes: {
      "0%": {
        opacity: "0%",
        transform: "transformY(4rem)"
      },
      "100%": {
        opacity: "100%",
        transform: "transformY(0)"
      }
    }
  },
  plugins: [],
}

