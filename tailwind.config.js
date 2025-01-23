module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ['focus'], // Ensure focus variant is available
    },
  },
  plugins: [],
};
