import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  field: {
    fontFamily: "'Libre Barcode 128 Text', cursive",
    fontSize: "2.4rem"
  }
};
const BarcodeField = ({ record = {}, source, classes }) => (
  <span className={classes.field}>{record[source]}</span>
);

export default withStyles(styles)(BarcodeField);
