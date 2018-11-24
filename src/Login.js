import React from "react";
import { Text, Box } from "rebass";
import { Formik, Form, Field } from "formik";
import PageHead from "./ui/PageHead";
import Container from "./ui/Container";
import FormGroup from "./ui/FormGroup";
import SubmitButton from "./ui/SubmitButton";

const Login = ({ onSuccess }) => {
  return (
    <Box>
      <PageHead title="Connectez-vous">
        <Text as="p">
          Cet espace est réservé aux membres de La Chouette Coop. Veuillez vous
          connecter avec vos identifiants habituels.
        </Text>
      </PageHead>
      <Formik
        onSubmit={(values, actions) => {
          fetch("/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(response => {
            if (response.ok) {
              response.json().then(({ token }) => onSuccess(token));
            } else {
              actions.setStatus("invalid_login");
            }
            actions.setSubmitting(false);
          });
        }}
      >
        {({ status }) => (
          <Container>
            <Form>
              <FormGroup
                htmlFor="email"
                label="Votre adresse email"
                help="Sur laquelle vous recevez les informations de La Chouette Coop"
              >
                <Field
                  name="email"
                  type="text"
                  placeholder="jean@tibou.fr"
                  size="40"
                />
              </FormGroup>

              <FormGroup htmlFor="password" label="Le mot de passe associé">
                <Field name="password" type="password" size="20" />
              </FormGroup>

              <SubmitButton
                error={
                  status === "invalid_login" && (
                    <Text>
                      Ces identifiants n’ont pas été reconnus. Vérifiez que les
                      informations sont correctes, et que vous êtes bien
                      adhérent à l’association de La Chouette Coop en 2018. Si
                      le problème persiste, contactez le Bureau des Membres.
                    </Text>
                  )
                }
              >
                Se connecter
              </SubmitButton>
            </Form>
          </Container>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
