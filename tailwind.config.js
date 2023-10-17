/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      padding: {
        def: "calc((100vw - 1180px) / 2)",
      },
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
      },
      colors: {
        translucent: "#0B090921",
        primary: "#FF8906",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      screens: {
        desk: "1440px",
        mobile_l: "425px",
        mobile: "465px",
        mobile_m: "375px",
        detailProduct: "872px",
      },
    },
  },
  plugins: [],
};
