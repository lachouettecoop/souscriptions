import React from "react";
import { Flex, Box, Heading } from "rebass";
import { WithWizard } from "react-albus";

import StepNumber from "../ui/StepNumber";

const StepHead = () => (
  <WithWizard>
    {({ step, steps }) => (
      <Flex flexDirection="column">
        <Flex justifyContent="space-around" mb={4}>
          {steps.map((aStep, index) => (
            <StepNumber
              key={aStep.id}
              variant={aStep === step ? "active" : "normal"}
            >
              {index + 1}
            </StepNumber>
          ))}
        </Flex>
        <Box>
          <Heading>{step.name}</Heading>
        </Box>
      </Flex>
    )}
  </WithWizard>
);

export default StepHead;
