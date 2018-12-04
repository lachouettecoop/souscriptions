import React, { useState, useEffect } from "react";
import { Formik, Form as FormikForm } from "formik";
import { Text } from "rebass";
import ky from "ky";

import Process from "./Process";
import Success from "./Success";

const Form = ({ userId }) => {
  const [currentValues, setCurrentValues] = useState(null);
  useEffect(
    () => {
      ky.get(`/api/v1/chouettos/${userId}`)
        .json()
        .then(setCurrentValues);
    },
    [userId]
  );

  return currentValues === null ? (
    <Text>
      Veuillez patientez, nous récupérons les informations en notre
      connaissance…
    </Text>
  ) : (
    <Formik
      initialValues={currentValues}
      onSubmit={(values, actions) => {
        ky.put(`/api/v1/chouettos/${userId}`, {
          json: values
        })
          .json()
          .then(res => {
            actions.setSubmitting(false);
            actions.setStatus({
              type: "success",
              message: "Merci !"
            });
          })
          .catch(() => {
            actions.setSubmitting(false);
            actions.setStatus({
              type: "error",
              message:
                "Une erreur est survenue lors de la sauvegarde des données. Si le problème persiste, contactez nous."
            });
          });
      }}
    >
      {({ status }) => (
        <FormikForm>
          {status && status.type === "error" && status.message}
          {status && status.type === "success" ? <Success /> : <Process />}
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
