import React from "react";
import { Box, Text, Heading, Button, Card } from "rebass";
import { Link } from "@reach/router";
import { FaExchangeAlt } from "react-icons/fa";
import Auth from "./Auth";
import PageHead from "./ui/PageHead";
import Container from "./ui/Container";
import IconButton from "./ui/IconButton";

const CardWithCTA = ({ children }) => (
  <Card my={4} p={4} boxShadow="0 2px 5px rgba(0, 0, 0, 0.25)">
    {children}
  </Card>
);

const EstimatedTime = ({ children }) => (
  <Text fontSize={1} color="darkbrown">
    Temps estimé : {children}
  </Text>
);

const CTA = ({ children, to }) => (
  <Button as={Link} variant="primary" to={to}>
    {children}
  </Button>
);

const StartSubscriptionProcessCTA = () => (
  <CardWithCTA>
    <Heading>Souscrivez à des parts sociales du supermarché</Heading>
    <Text as="p">
      Nous avons un nouveau local ! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Ducimus, deleniti beatae? Labore, officiis. Amet
      accusantium eum ut accusamus, asperiores necessitatibus est cupiditate
      odit veniam blanditiis autem animi numquam labore nihil!
    </Text>
    <CTA to="souscrire">Pré-remplir un dossier de souscription en ligne</CTA>
    <EstimatedTime>10 minutes</EstimatedTime>
  </CardWithCTA>
);

const StartReunionProcessCTA = () => (
  <CardWithCTA>
    <Heading>Assistez à une réunion de souscription</Heading>
    <Text as="p">
      On se rencontre ! Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Ducimus, deleniti beatae? Labore, officiis. Amet accusantium eum ut
      accusamus, asperiores necessitatibus est cupiditate odit veniam blanditiis
      autem animi numquam labore nihil!
    </Text>
    <CTA to="reunions">
      S’inscrire à l’une des prochaines réunion de souscription
    </CTA>
    <EstimatedTime>4 minutes</EstimatedTime>
  </CardWithCTA>
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
            <IconButton onClick={logout} bg="darkbrown" icon={FaExchangeAlt}>
              Changer d’utilisateur
            </IconButton>
          </PageHead>

          <Container>
            {user.status === "nouveau" && <StartSubscriptionProcessCTA />}
            {user.status === "nouveau" && <StartReunionProcessCTA />}
          </Container>
        </Box>
      )}
    </Auth>
  );
};

export default Dashboard;
