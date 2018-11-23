import React from "react";
import { ThemeProvider } from "styled-components";

// see https://github.com/lachouettecoop/styleguide

const colors = {
  primary: "#445448",

  // palette LCC
  paleyellow: "#f5eeae",
  darkyellow: "#e6c56d",
  lightbrown: "#d8b881",
  brown: "#b88c56",
  darkbrown: "#ba7c40",

  paleviolet: "#eee1e9",
  greyblue: "#d3d8d3",
  greyblue2: "#d7d8d9",
  violet: "#c0b9c0",

  palegreen: "#d7daba",
  lightgreen: "#c0d29f",
  blue: "#b6cab6",

  // accents from http://clrs.cc/
  navy: "#001f3f",
  blue: "#0074D9",
  aqua: "#7FDBFF",
  teal: "#39CCCC",
  olive: "#3D9970",
  green: "#2ECC40",
  lime: "#01FF70",
  yellow: "#FFDC00",
  orange: "#FF851B",
  red: "#FF4136",
  maroon: "#85144b",
  fuchsia: "#F012BE",
  purple: "#B10DC9",
  black: "#111111",
  gray: "#AAAAAA",
  silver: "#DDDDDD",
  white: "#FFFFFF"
};

const theme = {
  colors,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 98],
  Heading: {
    fontFamily: "'Montserrat', sans-serif"
  },
  Text: {
    fontFamily: "'Cabin', sans-serif"
  },
  buttons: {
    primary: {
      color: colors.white,
      backgroundColor: colors.primary
    }
  }
};

const LCCTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default LCCTheme;
