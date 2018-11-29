import React from "react";
import { Box, Text } from "rebass";
import { Formik, Form } from "formik";
import { navigate } from "@reach/router";
import ky from "ky";

import Auth from "./Auth";
import PageHead from "./ui/PageHead";
import Container from "./ui/Container";

import Process from "./Subscription/Process";
import Footer from "./Subscription/Footer";

const Subscription = () => {
  return (
    <Auth>
      {user => (
        <Box>
          <PageHead title="Souscrire en ligne">
            <Text as="p">
              Ce site vous permet de <strong>pré-remplir</strong> votre dossier
              de souscription en ligne dans le but de gagner du temps lors d’une
              réunion de souscription.
            </Text>
            <Text as="p">
              Une fois les informations saisies, il vous faudra vous inscrire à
              une réunion de souscription afin de finaliser la souscription aux
              parts sociales de la coopérative.
            </Text>
          </PageHead>

          <Container>
            <Formik
              initialValues={{ nom: user.lastname, prenom: user.firstname }}
              onSubmit={(values, actions) => {
                // TODO PUT if user already exists
                console.log({ values });
                ky.post(`/api/v1/chouettos`, {
                  json: {
                    ...values,
                    id: user.barcode
                  }
                })
                  .json()
                  .then(res => {
                    console.log("nouvelles données", res);
                    actions.setSubmitting(false);
                    navigate("/");
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
                <Form>
                  {status && status.message}
                  <Process />
                </Form>
              )}
            </Formik>
          </Container>

          <Footer />
        </Box>
      )}
    </Auth>
  );
};

export default Subscription;
