import "babel-polyfill";
import "whatwg-fetch";

import React from "react";
import { render } from "react-dom";
import {
  Admin,
  Resource,
  ShowGuesser,
  EditGuesser,
  CreateGuesser,
  ListGuesser
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import frenchMessages from "ra-language-french";

import PeopleIcon from "@material-ui/icons/People";
import SecurityIcon from "@material-ui/icons/Security";
import EventIcon from "@material-ui/icons/Event";

import { ChouettosList, ChouettosEdit } from "./chouettos";
import { ReunionList, ReunionEdit, ReunionCreate } from "./reunions";
import {
  AuthorizationList,
  AuthorizationEdit,
  AuthorizationCreate
} from "./authorizations";

const dataProvider = jsonServerProvider("/api/v1");

const App = () => (
  <Admin
    locale="fr"
    dataProvider={dataProvider}
    i18nProvider={() => frenchMessages}
  >
    <Resource
      name="chouettos"
      icon={PeopleIcon}
      list={ChouettosList}
      show={ShowGuesser}
      edit={ChouettosEdit}
    />
    <Resource
      name="reunions"
      label="Réunions"
      icon={EventIcon}
      list={ReunionList}
      edit={ReunionEdit}
      create={ReunionCreate}
    />
    <Resource
      name="authorizations"
      label="Autorisations"
      icon={SecurityIcon}
      list={AuthorizationList}
      edit={AuthorizationEdit}
      create={AuthorizationCreate}
    />
  </Admin>
);

render(<App />, document.getElementById("app"));
