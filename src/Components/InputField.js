import { TextField } from "@mui/material";
import React from "react";

const InputField = ({ primaryNo, operator, secondaryNo }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ bgcolor: "white", margin: "10px 0px", width: "80%" }}
        value={`${primaryNo} ${operator} ${secondaryNo}`}
        fullWidth
        name="expression"
      />
    </>
  );
};

export default InputField;
