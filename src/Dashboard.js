import React from "react";
import { Box, Heading, Text } from "rebass";
import Auth from "./Auth";
import PageHead from "./ui/PageHead";
import Container from "./ui/Container";

const Dashboard = () => {
  return (
    <Auth>
      {user => (
        <Box>
          <PageHead title={`Bonjour ${user.firstname},`}>
            <Text as="p">
              Cette page contient les informations dont vous devriez avoir
              besoin. Elle vous permet également d’accéder aux différentes
              démarches qu’il est possible de faire en ligne.
            </Text>
          </PageHead>
          <Container>
            <Text as="p">Votre token est : {user.token}</Text>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Container>
        </Box>
      )}
    </Auth>
  );
};

export default Dashboard;
