import React from "react";
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EmailField,
  Filter,
  SimpleForm,
  DisabledInput,
  CheckboxGroupInput,
  TextInput,
  LongTextInput
} from "react-admin";
import Chip from "@material-ui/core/Chip";

const ListOfValuesField = ({ record, source }) => (
  <div>
    {record[source].map(
      (value, index) => console.log(value) || <Chip key={index} label={value} />
    )}
  </div>
);

const AuthorizationFilter = props => (
  <Filter {...props}>
    <TextInput label="Recherche" source="q" alwaysOn />
  </Filter>
);

export const AuthorizationList = props => (
  <List {...props} filters={<AuthorizationFilter />}>
    <Datagrid rowClick="edit">
      <EmailField source="id" label="Email" />
      <ListOfValuesField source="roles" />
      <TextField source="commentaire" />
    </Datagrid>
  </List>
);

const AuthorizationForm = props => {
  const IdComponent = props.isCreation ? TextInput : DisabledInput;
  return (
    <SimpleForm {...props}>
      <IdComponent source="id" label="Email" />
      <CheckboxGroupInput
        source="roles"
        choices={[
          { id: "Super Admin", name: "Super Admin" },
          { id: "Admin", name: "Admin" },
          { id: "Photographe", name: "Photographe" }
        ]}
      />
      <LongTextInput source="commentaire" />
    </SimpleForm>
  );
};

export const AuthorizationCreate = props => (
  <Create {...props}>
    <AuthorizationForm isCreation />
  </Create>
);

export const AuthorizationEdit = props => (
  <Edit {...props}>
    <AuthorizationForm />
  </Edit>
);
