import React, { useState, useEffect, Fragment } from "react";
import { Box, Heading, Text, Link, Button } from "rebass";
import { Link as RouterLink } from "@reach/router";
import ky from "ky";

import Auth from "./Auth";
import PageHead from "./ui/PageHead";
import Container from "./ui/Container";
import ImportantText from "./ui/ImportantText";
import IconButton from "./ui/IconButton";
import { FaArrowCircleLeft } from "react-icons/fa";

const DateReunion = ({ reunion }) => (
  <Fragment>{new Date(reunion.date).toLocaleString("fr-FR")}</Fragment>
);

const FramaForm = ({ url, children }) => (
  <Box>
    {children}
    <Text textAlign="center" mt={2}>
      <iframe src={url} width="100%" height="600" frameBorder="0" />
    </Text>
  </Box>
);

const Reunions = () => {
  const [reunions, setReunions] = useState(null);
  const [reunion, setReunion] = useState();

  useEffect(() => {
    ky.get("/api/v1/reunions")
      .json()
      .then(setReunions);
  }, []);

  return (
    <Auth>
      {user => (
        <Box>
          <PageHead title="Réunions de souscription">
            <Text as="p">
              La souscription aux parts sociales requiert d’avoir assisté à une
              réunion spécifique présentant notre projet et ses différents
              aspects.
            </Text>
          </PageHead>

          <Container>
            {reunion ? (
              <FramaForm url={reunion.url}>
                <IconButton
                  variant="secondary"
                  onClick={() => setReunion()}
                  icon={FaArrowCircleLeft}
                >
                  Retour
                </IconButton>
                <Heading my={3}>
                  Inscription le <DateReunion reunion={reunion} />
                </Heading>
              </FramaForm>
            ) : (
              <Box>
                <Text as="p">
                  Voici les prochaines dates planifiées. Elles auront lieu au
                  futur local, <strong>1 impasse Lapujade</strong>. Veuillez
                  vous inscrire à l’une d’elle en remplissant le formulaire
                  dédié.
                </Text>
                <ImportantText>
                  Pour rappel, vous devrez avoir{" "}
                  <Link as={RouterLink} to="/souscrire">
                    pré-rempli vos informations en ligne
                  </Link>{" "}
                  avant la réunion. Cela permettra un gain de temps.
                </ImportantText>

                {reunions === null ? (
                  <Text>Chargement en cours…</Text>
                ) : reunions.length === 0 ? (
                  <Text>Aucune réunion prévue pour l’instant</Text>
                ) : (
                  reunions.map(aReunion => (
                    <Text textAlign="center" my={5} key={aReunion.url}>
                      <Text fontSize={4}>
                        <DateReunion reunion={aReunion} />
                      </Text>
                      <Button
                        variant="primary"
                        mt={1}
                        p={0}
                        fontSize={1}
                        onClick={() => setReunion(aReunion)}
                      >
                        Choisir cette date
                      </Button>
                    </Text>
                  ))
                )}
              </Box>
            )}
          </Container>
        </Box>
      )}
    </Auth>
  );
};

export default Reunions;
