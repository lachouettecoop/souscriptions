import React from "react";
import { Flex, Box, Text, Heading, Button, Link } from "rebass";
import { Formik, Form, Field } from "formik";
import { Wizard, Steps, Step, WithWizard } from "react-albus";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaCalendar
} from "react-icons/fa";
import Undraw from "react-undraw";
import { Link as RouterLink } from "@reach/router";

import Auth from "./Auth";
import PageHead from "./ui/PageHead";
import Container from "./ui/Container";
import FormGroup from "./ui/FormGroup";
import IconButton from "./ui/IconButton";

const StepNumber = ({ children, variant, ...props }) => (
  <Text
    {...props}
    fontSize={5}
    color={variant === "active" ? "primary" : "palegreen"}
  >
    {children}
  </Text>
);
const SubscriptionHead = () => (
  <WithWizard>
    {({ step, steps }) => (
      <Flex flexDirection="column">
        <Flex justifyContent="space-around" mb={4}>
          {steps.map((aStep, index) => (
            <StepNumber
              key={aStep.id}
              variant={aStep === step ? "active" : "normal"}
            >
              {index + 1}
            </StepNumber>
          ))}
        </Flex>
        <Box>
          <Heading>{step.name}</Heading>
        </Box>
      </Flex>
    )}
  </WithWizard>
);

const SubscriptionNavigation = () => (
  <WithWizard>
    {({ next, previous, step, steps }) => {
      const isLast = steps.indexOf(step) >= steps.length - 1;

      return (
        <Flex justifyContent="space-between">
          {steps.indexOf(step) > 0 && !isLast && (
            <IconButton
              icon={FaArrowCircleLeft}
              variant="secondary"
              onClick={previous}
              type="button"
            >
              Retour
            </IconButton>
          )}

          {!isLast && (
            <IconButton
              icon={FaArrowCircleRight}
              variant="primary"
              onClick={next}
              type="button"
            >
              {step.labelNext || "Passer à l’étape suivante"}
            </IconButton>
          )}
        </Flex>
      );
    }}
  </WithWizard>
);

const ImportantText = ({ children, ...props }) => (
  <Text
    as="p"
    pl={2}
    py={2}
    css={{
      borderLeft: `3px solid #ba7c40` // TODO Use the design token for darkbrown color
    }}
    {...props}
  >
    {children}
  </Text>
);

const PresentationContent = () => (
  <Box>
    <Auth>
      {user => (
        <ImportantText as="p">
          Vous vous apprêtez à transmettre en ligne les informations permettant
          de souscrire aux parts sociales de La Chouette Coop. Ces informations
          seront rattachées à l’adresse email <strong>{user.email}</strong>.
        </ImportantText>
      )}
    </Auth>

    <Text as="p">
      Les informations recueillies à travers ce formulaire sont destinées à la
      gestion des souscriptions des parts sociales et font l’objet d’un
      traitement par La Chouette Coop. Celui-ci se fonde sur l’intérêt légitime.
    </Text>

    <Text as="p">
      Ces données seront conservées tant que vous êtes sociétaire de la Chouette
      Coop et ne seront accessibles que par les prestataires informatiques.
    </Text>

    <Text as="p">
      Pour toute question ou problème rencontré durant la saisie de vos
      informations, veuillez nous contacter à{" "}
      <Link href="mailto:contact@lachouettecoop.fr">
        contact@lachouettecoop.fr
      </Link>
      .
    </Text>
  </Box>
);

const SubscriptionForm = () => (
  <Wizard>
    <SubscriptionHead />
    <Steps>
      <Step
        id="intro"
        name="Présentation"
        labelNext="C’est compris ! Je saisis mes informations."
      >
        {() => <PresentationContent />}
      </Step>
      <Step id="vous" name="Vous">
        {() => (
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
        )}
      </Step>
      <Step id="coordonnees" name="Vos coordonnées">
        {() => (
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
              <Field
                name="code_postal"
                type="text"
                placeholder="31100"
                size="6"
              />
            </FormGroup>
            <FormGroup htmlFor="ville" label="Ville">
              <Field name="ville" type="text" placeholder="Jean" size="20" />
            </FormGroup>
          </Box>
        )}
      </Step>
      <Step
        id="additionnelles"
        name="Informations additionnelles"
        labelNext="Et voilà ! Je valide ces informations."
      >
        {() => (
          <Box>
            <Text as="p">
              Ces informations nous permettent de vous contacter et de vous
              convoquer aux assemblées générales. Ne pas fournir les données
              n’entraine pas de conséquences sur l’admission de votre
              candidature.
            </Text>

            <FormGroup htmlFor="telephone" label="N° de téléphone" optional>
              <Field
                name="telephone"
                type="tel"
                placeholder="060102030405"
                size="15"
              />
            </FormGroup>
          </Box>
        )}
      </Step>
      <Step id="success" name="Merci !">
        {() => (
          <Box>
            <Text as="p">
              Et voilà, nous avons tout ce qu’il faut pour la souscription des
              parts sociales.
            </Text>
            <Box my={4}>
              {/* TODO Use the design token for primary color */}
              <Undraw name="super-thank-you" primaryColor="#ba7c40" />
            </Box>

            <ImportantText>
              Il ne reste plus qu’à vous inscrire à l’une des prochaines{" "}
              <strong>réunions de souscription</strong> prévues.
            </ImportantText>
            <IconButton as={RouterLink} icon={FaCalendar} to="/">
              Voir les prochaines dates de réunion de souscription
            </IconButton>
          </Box>
        )}
      </Step>
    </Steps>
    <SubscriptionNavigation />
  </Wizard>
);

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
                  <SubscriptionForm />
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
