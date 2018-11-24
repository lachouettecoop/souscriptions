import React from "react";
import { Box, Heading, Text } from "rebass";
import Auth from "./Auth";

const Dashboard = () => {
  return (
    <Auth>
      {user => (
        <Box>
          <Heading>Bonjour {user.displayName}</Heading>
          <Text as="p">Votre token est : {user.token}</Text>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </Box>
      )}
    </Auth>
  );
};

export default Dashboard;
