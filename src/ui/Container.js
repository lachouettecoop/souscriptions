import React from "react";
import { Box } from "rebass";

const Container = ({ children }) => (
  <Box width={"90%"} mx="auto">
    {children}
  </Box>
);

export default Container;