import React from "react";
import { Box, Text } from "rebass";
import { Field } from "formik";
import FormGroup from "../../ui/FormGroup";

const Additionnelle = () => (
  <Box>
    <Text as="p">
      Ces informations nous permettent de vous contacter et de vous convoquer
      aux assemblées générales. Ne pas fournir les données n’entraine pas de
      conséquences sur l’admission de votre candidature.
    </Text>

    <FormGroup htmlFor="telephone" label="N° de téléphone" optional>
      <Field name="telephone" type="tel" placeholder="060102030405" size="15" />
    </FormGroup>
  </Box>
);

export default Additionnelle;
