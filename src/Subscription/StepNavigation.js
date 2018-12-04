import React from "react";
import { Flex } from "rebass";
import { WithWizard } from "react-albus";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

import IconButton from "../ui/IconButton";

const StepNavigation = () => (
  <WithWizard>
    {({ next, previous, step, steps }) => {
      const isLast = steps.indexOf(step) >= steps.length - 1;
      return (
        <Flex justifyContent="space-between" key={step.id}>
          {steps.indexOf(step) > 0 && !isLast && (
            <IconButton
              icon={FaArrowCircleLeft}
              variant="secondary"
              onClick={previous}
              type="button"
            >
              Retour
            </IconButton>
          )}

          <IconButton
            icon={FaArrowCircleRight}
            variant="primary"
            onClick={next}
            type={isLast ? "submit" : "button"}
          >
            {step.labelNext || "Passer à l’étape suivante"}
          </IconButton>
        </Flex>
      );
    }}
  </WithWizard>
);

export default StepNavigation;
