import React from "react";
import { Wizard, Steps, Step } from "react-albus";

import StepHead from "./StepHead";
import StepNavigation from "./StepNavigation";
import Presentation from "./StepContent/Presentation";
import Vous from "./StepContent/Vous";
import Coordonnees from "./StepContent/Coordonnees";
import Additionnelle from "./StepContent/Additionnelle";
import Success from "./StepContent/Success";

const Process = () => (
  <Wizard>
    <StepHead />
    <Steps>
      <Step
        id="intro"
        name="Présentation"
        labelNext="C’est compris ! Je saisis mes informations."
      >
        {() => <Presentation />}
      </Step>
      <Step id="vous" name="Vous">
        {() => <Vous />}
      </Step>
      <Step id="coordonnees" name="Vos coordonnées">
        {() => <Coordonnees />}
      </Step>
      <Step
        id="additionnelles"
        name="Informations additionnelles"
        labelNext="Et voilà ! Je valide ces informations."
        submitForm
      >
        {() => <Additionnelle />}
      </Step>
      <Step id="success" name="Merci !">
        {() => <Success />}
      </Step>
    </Steps>
    <StepNavigation />
  </Wizard>
);

export default Process;
