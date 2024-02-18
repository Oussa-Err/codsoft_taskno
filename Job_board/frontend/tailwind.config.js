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
  },
  plugins: [],
}

