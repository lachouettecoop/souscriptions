import React from "react";
import { Box } from "rebass";
import { Field } from "formik";
import FormGroup from "../../ui/FormGroup";

const Vous = () => (
  <Box>
    <FormGroup htmlFor="civilite" label="Civilité">
      <Field name="civilite" type="text" placeholder="M." size="5" />
    </FormGroup>
    <FormGroup htmlFor="nom" label="Nom">
      <Field name="nom" type="text" placeholder="TIBOU" size="20" />
    </FormGroup>
    <FormGroup htmlFor="prenom" label="Prénom">
      <Field name="prenom" type="text" placeholder="Jean" size="20" />
    </FormGroup>
    <FormGroup
      htmlFor="date_naissance"
      label="Date de naissance"
      help="JJ/MM/AAAA"
    >
      <Field
        name="date_naissance"
        type="text"
        placeholder="15/01/1979"
        size="10"
      />
    </FormGroup>
  </Box>
);

export default Vous;
