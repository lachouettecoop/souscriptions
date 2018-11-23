import React from "react";
import { Heading, Text, Button, Box } from "rebass";
import { Formik, Form, Field } from "formik";

const Login = ({ onSuccess }) => {
  return (
    <Box>
      <Heading as="h1">Connectez-vous</Heading>
      <Text as="p">
        Cet espace est réservé aux membres de La Chouette Coop. Veuillez vous
        connecter avec vos identifiants habituels.
      </Text>
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
          <Form>
            <Text>
              <label htmlFor="email">Votre adresse email</label>
              <Field type="text" name="email" placeholder="jean@tibou.fr" />
            </Text>

            <Text>
              <label htmlFor="password">Le mot de passe associé</label>
              <Field type="password" name="password" />
            </Text>

            {status === "invalid_login" && (
              <Text>
                Ces identifiants n’ont pas été reconnus. Vérifiez que les
                informations sont correctes, et que vous êtes bien adhérent à
                l’association de La Chouette Coop en 2018. Si le problème
                persiste, contactez le Bureau des Membres.
              </Text>
            )}
            <Button variant="primary" type="submit">
              Se connecter
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
