/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rich-blacks-main": "#011320",
        dodgerblue: {
          100: "rgba(47, 128, 237, 0.08)",
          200: "rgba(47, 128, 237, 0.2)",
        },
        "whites-01": "#fefefe",
        white: "#fff",
        "steel-pink-main": "#b409b7",
        "grape-purple-04": "#a15bcf",
        "azure-main": "#2f80ed",
        "whites-04": "#d2d2d2",
        "whites-main": "#fcfcfc",
        "grape-purple-main": "#7209b7",
        gray: "rgba(255, 255, 255, 0.2)",
        "steel-pink-03": "#da84db",
        "whites-02": "#fdfdfd",
        crimson: "#ff495c",
        purple: "#7e1f86",
        mediumvioletred: "#ce1f6f",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        404: "'IBM Plex Mono'",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "50xl-1": "69.1px",
        "3xs": "10px",
      },
      boxShadow: {
        "blue-glow": "0 8px 30px rgba(0, 118, 255, 0.1)", // Customize the color and spread as needed
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      sm: "14px",
      "17xl": "36px",
      "21xl": "40px",
      "246xl-6": "265.6px",
      "5xl": "24px",
      "3xs-3": "9.3px",
      "22xl-2": "41.2px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
