// tailwind.config.js
export default  {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'star-indigo': '#4B0082',
        'star-purple': '#FF69B4',
        'star-pink': '#1E1E3D',
      },
    },
  },
  plugins: [],
};
