import React from "react";
import { Box, Text, Link } from "rebass";
import Auth from "../../Auth";
import ImportantText from "../../ui/ImportantText";

const Presentation = () => (
  <Box>
    <Auth>
      {user => (
        <ImportantText>
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

export default Presentation;
