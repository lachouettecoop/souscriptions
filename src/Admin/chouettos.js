import React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  Filter,
  SimpleForm,
  TextInput,
  DisabledInput,
  Toolbar,
  SaveButton
} from "react-admin";
import BarcodeField from "./Field/BarcodeField";

const ChouettosFilter = props => (
  <Filter {...props}>
    <TextInput label="Recherche" source="q" alwaysOn />
  </Filter>
);

export const ChouettosList = props => (
  <List
    {...props}
    title="Les Chouettos connus ici"
    filters={<ChouettosFilter />}
  >
    <Datagrid rowClick="show">
      <BarcodeField source="id" label="Code barre" />
      <TextField source="nom" />
      <TextField source="prenom" label="Prénom" />
    </Datagrid>
  </List>
);

const ChouettosEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);
export const ChouettosEdit = props => (
  <Edit {...props}>
    <SimpleForm toolbar={<ChouettosEditToolbar />}>
      <DisabledInput source="id" label="Code barre" />
      <TextInput source="nom" />
      <TextInput source="prenom" label="Prénom" />
    </SimpleForm>
  </Edit>
);
