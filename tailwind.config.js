module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.js"],
    enabled: process.env.NODE_ENV === "production", // Włącz tylko w produkcji
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "391px",
      md: "600px",
      lg: "1441px",
      xl: "1921px",
    },
    extend: {
      backgroundImage: {
        'check-icon': "url('./assets/images/check_icon.png.png')",
      },
      borderRadius: {
        DEFAULT: "20px",
        stats: "10px",
      },
      spacing: {
        "10px": "10px",
        "20px": "20px",
        "15px": "15px",
        "44px": "44px",
      },
      animation: {
        carousel: "carousel 15s linear infinite",
        tabletCarousel: "tabletCarousel 15s linear infinite",
        rotate: "rotate 2s ease-in-out infinite"
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-272%)" },
        },
        tabletCarousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-142%)" },
        },
        rotate: {
          '0%': { transform: "rotate(0deg)" },
          '50%': { transform: "rotate(10deg)" },
          '100%': { transform: "rotate(0deg)" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: ["16px", "19.2px"],
        base: ["24px", "33px"],
        lg: ["32px", "38.4px"],
        xl: ["35px", "42px"],
        custom: ["35.2px", "38.7px"],
        xxl: ["45.7px", "54.8px"],
        xxxl: ["50px", "60px"],
      },
      colors: {
        dark: "#292F3E",
        orangeLight: "#FFD437",
        orangeDark: "#f89e52",
        paragraphFirst: "#727272",
        paragraphSecond: "#666666",
        underline: "#191919",
        menu: "#0b0b0b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
