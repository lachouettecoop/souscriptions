import React from "react";
import { Formik, Form, Field } from "formik";

const Login = ({ onSuccess }) => {
  return (
    <div>
      <h1>Connectez-vous</h1>
      <p>
        Cet espace est réservé aux membres de La Chouette Coop. Veuillez vous
        connecter avec vos identifiants habituels.
      </p>
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
            <div>
              <label htmlFor="email">Votre adresse email</label>
              <Field type="text" name="email" placeholder="jean@tibou.fr" />
            </div>

            <div>
              <label htmlFor="password">Le mot de passe associé</label>
              <Field type="password" name="password" />
            </div>

            {status === "invalid_login" && (
              <div>
                Ces identifiants n’ont pas été reconnus. Vérifiez que les
                informations sont correctes, et que vous êtes bien adhérent à
                l’association de La Chouette Coop en 2018. Si le problème
                persiste, contactez le Bureau des Membres.
              </div>
            )}
            <button type="submit">Se connecter</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
