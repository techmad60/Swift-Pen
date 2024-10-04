import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-color-one": "#6C8693",
        "text-color-two": "#D1FAF9",
        "text-color-three": "#E9E3AF",
        "text-color-four": "#A7B6BE",
        "text-color-five": "#566B76",
        "h1-color": "#2B363B",
        "h2-color": "#899EA9",
        "h3-color": "#566B76",
        "btn-one-color": "#415058",
        "btn-two-color": "#108986",
      },
      backgroundImage: {
        'dot-pattern': "url('/images/dottedBg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
export default config;
