import React from "react";
import { Box } from "rebass";
import { Field } from "formik";
import FormGroup from "../../ui/FormGroup";

const Coordonnees = () => (
  <Box>
    <FormGroup
      htmlFor="adresse"
      label="Adresse"
      help="Numéro, rue, bâtiment, appartement…"
    >
      <Field
        name="adresse"
        type="text"
        placeholder="1042bis avenue du Grand duc, bâtiment C, Appt 12"
        component="textarea"
        cols={40}
        rows={3}
      />
    </FormGroup>
    <FormGroup htmlFor="code_postal" label="Code postal">
      <Field name="code_postal" type="text" placeholder="31100" size="6" />
    </FormGroup>
    <FormGroup htmlFor="ville" label="Ville">
      <Field name="ville" type="text" placeholder="Toulouse" size="20" />
    </FormGroup>
  </Box>
);

export default Coordonnees;
