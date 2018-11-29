import "babel-polyfill";
import "whatwg-fetch";

import React from "react";
import { render } from "react-dom";
import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import frenchMessages from "ra-language-french";

import PeopleIcon from "@material-ui/icons/People";

import { ChouettosList, ChouettosEdit } from "./chouettos";

const dataProvider = jsonServerProvider("/api/v1");

const App = () => (
  <Admin
    locale="fr"
    dataProvider={dataProvider}
    i18nProvider={() => frenchMessages}
  >
    <Resource
      name="chouettos"
      list={ChouettosList}
      icon={PeopleIcon}
      show={ShowGuesser}
      edit={ChouettosEdit}
    />
  </Admin>
);

render(<App />, document.getElementById("app"));
