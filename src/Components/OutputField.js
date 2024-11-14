import { TextField } from "@mui/material";
import React from "react";

const OutputField = ({ result }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={result}
        sx={{ bgcolor: "white", margin: "10px 0px", width: "80%" }}
        name="expression"
      />
    </>
  );
};

export default OutputField;
