import React from "react";
import { Box, Text, Heading, Button, Link } from "rebass";
import { Formik, Form, Field } from "formik";

import Auth from "./Auth";
import PageHead from "./ui/PageHead";
import Container from "./ui/Container";
import FormGroup from "./ui/FormGroup";

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
                  <fieldset>
                    <legend>Informations nécessaires</legend>
                    <Text as="p">
                      Les informations recueillies à travers ce formulaire sont
                      destinées à la gestion des souscriptions des parts
                      sociales et font l’objet d’un traitement par La Chouette
                      Coop. Celui-ci se fonde sur l’intérêt légitime.
                    </Text>
                    <FormGroup htmlFor="civilite" label="M? Mme?">
                      <Field
                        name="civilite"
                        type="text"
                        placeholder="Jean"
                        size="20"
                      />
                    </FormGroup>
                    <FormGroup htmlFor="nom" label="Nom">
                      <Field
                        name="nom"
                        type="text"
                        placeholder="TIBOU"
                        size="20"
                      />
                    </FormGroup>
                    <FormGroup htmlFor="prenom" label="Prénom">
                      <Field
                        name="prenom"
                        type="text"
                        placeholder="Jean"
                        size="20"
                      />
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
                      <Field
                        name="code_postal"
                        type="text"
                        placeholder="31100"
                        size="6"
                      />
                    </FormGroup>
                    <FormGroup htmlFor="ville" label="Ville">
                      <Field
                        name="ville"
                        type="text"
                        placeholder="Jean"
                        size="20"
                      />
                    </FormGroup>
                    <Text>
                      Votre adresse email est <strong>{user.email}</strong>
                    </Text>
                  </fieldset>

                  <fieldset>
                    <legend>Informations additionnelles</legend>
                    <Text as="p">
                      Ces informations nous permettent de vous contacter et de
                      vous convoquer aux assemblées générales. Ne pas fournir
                      les données n’entraine pas de conséquences sur l’admission
                      de votre candidature.
                    </Text>

                    <FormGroup htmlFor="telephone" label="N° de téléphone">
                      <Field
                        name="telephone"
                        type="tel"
                        placeholder="060102030405"
                        size="20"
                      />
                    </FormGroup>
                  </fieldset>
                </Form>
              )}
            </Formik>
          </Container>

          <Text mt={4} p={2} color="primary" bg="palegreen">
            <Container>
              <Text as="p">
                Ces données seront conservées tant que vous êtes sociétaire de
                la Chouette Coop et ne seront accessibles que par les
                prestataires informatiques.
                <br />
                Pour exercer vos droits d’accès, de rectification, d’effacement,
                à la portabilité des données et de limitation du traitement,
                veuillez nous contacter à l’adresse suivante :{" "}
                <Link href="mailto:contact@lachouettecoop.fr">
                  contact@lachouettecoop.fr
                </Link>
                .
              </Text>
              <Text as="p">
                Vous pouvez également, pour des raisons tenant à votre situation
                particulière, vous opposer au traitement de vos données
                personnelles. Enfin vous disposez du droit de définir des
                directives post-mortem. Enfin, nous vous informons que vous
                pouvez introduire une réclamation auprès de la Commission
                Nationale de l’Informatique et des Libertés en cas de nécessité.
              </Text>
            </Container>
          </Text>
        </Box>
      )}
    </Auth>
  );
};

export default Subscription;
