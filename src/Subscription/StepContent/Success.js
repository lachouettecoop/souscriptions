import React from "react";
import { Box, Text } from "rebass";
import Undraw from "react-undraw";
import { FaCalendar } from "react-icons/fa";
import { Link as RouterLink } from "@reach/router";

import ImportantText from "../../ui/ImportantText";
import IconButton from "../../ui/IconButton";

const Success = () => (
  <Box>
    <Text as="p">
      Et voilà, nous avons tout ce qu’il faut pour la souscription des parts
      sociales.
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
);

export default Success;
