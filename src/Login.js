import React from "react";
import { Formik, Form, Field } from "formik";

const Login = ({ onSubmit }) => {
  return (
    <div>
      <h1>Connectez-vous</h1>
      <p>
        Cet espace est réservé aux membres de La Chouette Coop. Veuillez vous
        connecter avec vos identifiants habituels.
      </p>
      <Formik
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {props => (
          <Form>
            <div>
              <label htmlFor="email">Votre adresse email</label>
              <Field type="email" name="email" placeholder="jean@tibou.fr" />
            </div>

            <div>
              <label htmlFor="password">Le mot de passe associé</label>
              <Field type="password" name="password" />
            </div>

            <button type="submit">Se connecter</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
