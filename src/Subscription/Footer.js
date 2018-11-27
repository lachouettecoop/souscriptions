import React from "react";
import { Text, Link } from "rebass";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <Text mt={4} p={2} color="primary" bg="palegreen">
      <Container>
        <Text as="p">
          Ces données seront conservées tant que vous êtes sociétaire de la
          Chouette Coop et ne seront accessibles que par les prestataires
          informatiques.
          <br />
          Pour exercer vos droits d’accès, de rectification, d’effacement, à la
          portabilité des données et de limitation du traitement, veuillez nous
          contacter à l’adresse suivante :{" "}
          <Link href="mailto:contact@lachouettecoop.fr">
            contact@lachouettecoop.fr
          </Link>
          .
        </Text>
        <Text as="p">
          Vous pouvez également, pour des raisons tenant à votre situation
          particulière, vous opposer au traitement de vos données personnelles.
          Enfin vous disposez du droit de définir des directives post-mortem.
          Enfin, nous vous informons que vous pouvez introduire une réclamation
          auprès de la Commission Nationale de l’Informatique et des Libertés en
          cas de nécessité.
        </Text>
      </Container>
    </Text>
  );
};

export default Footer;
