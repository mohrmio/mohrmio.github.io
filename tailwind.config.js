/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
		container: {
			center: true,
		},
    extend: {
		  backgroundImage: {
				'squigs':"url('./public/images/90squiggle.png')",		
      },
		},
  },
  plugins: [],
}

