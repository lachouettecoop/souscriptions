import React from "react";
import {
  List,
  Create,
  Datagrid,
  DateField,
  UrlField,
  EditButton,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  DateTimeInput
} from "react-admin";

export const ReunionList = props => (
  <List {...props}>
    <Datagrid>
      <DateField source="date" showTime />
      <UrlField source="url" target="_blank" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ReunionEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DateTimeInput source="date" />
      <TextInput source="url" />
    </SimpleForm>
  </Edit>
);

export const ReunionCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DateTimeInput source="date" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);
