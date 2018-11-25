import React from "react";
import { Box, Text, Heading, Button, Flex } from "rebass";
import { Link } from "@reach/router";
import { FaExchangeAlt } from "react-icons/fa";
import Auth from "./Auth";
import PageHead from "./ui/PageHead";
import Container from "./ui/Container";

const StartSubscriptionProcessCTA = () => (
  <Box>
    <Heading>Souscrivez à des parts sociales du supermarché</Heading>
    <Text as="p">
      Nous avons un nouveau local ! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Ducimus, deleniti beatae? Labore, officiis. Amet
      accusantium eum ut accusamus, asperiores necessitatibus est cupiditate
      odit veniam blanditiis autem animi numquam labore nihil!
    </Text>
    <Button as={Link} variant="primary" to="souscrire">
      Pré-remplir un dossier de souscription en ligne
    </Button>
    <Text fontSize={1} color="darkbrown">
      Temps estimé : 10 minutes
    </Text>
  </Box>
);

const Dashboard = () => {
  return (
    <Auth>
      {(user, logout) => (
        <Box>
          <PageHead title={`Bonjour ${user.firstname},`}>
            <Text as="p">
              Cette page contient les informations dont vous devriez avoir
              besoin. Elle vous permet également d’accéder aux différentes
              démarches qu’il est possible de faire en ligne.
            </Text>
            <Button onClick={logout} bg="darkbrown">
              <Flex alignItems="center" as="span">
                <FaExchangeAlt />
                <Text as="span" ml={2}>
                  Changer d’utilisateur
                </Text>
              </Flex>
            </Button>
          </PageHead>

          <Container>
            {user.status === "nouveau" && <StartSubscriptionProcessCTA />}
          </Container>
        </Box>
      )}
    </Auth>
  );
};

export default Dashboard;
