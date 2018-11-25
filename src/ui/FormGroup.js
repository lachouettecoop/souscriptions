import React from "react";
import { Box, Text } from "rebass";

const FormGroup = ({ htmlFor, label, help, children }) => (
  <Box my={3} alignItems="center" justifyContent="space-between">
    <Text>
      <label htmlFor={htmlFor}>{label}</label>
      {help && (
        <Text color="darkbrown" fontSize={1} css={{ fontStyle: "italic" }}>
          {help}
        </Text>
      )}
    </Text>
    <Text mt={2}>{children}</Text>
  </Box>
);

export default FormGroup;
