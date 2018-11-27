import React from "react";
import { Box, Text } from "rebass";
import { Formik, Form } from "formik";

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
                console.log({ values });
              }}
            >
              {({ status }) => (
                <Form>
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
