import React, { useState } from "react";
import "./style.css";
import { Box, Container, Divider } from "@mui/material";
import InputField from "./InputField";
import OutputField from "./OutputField";
import ButtonBox from "./ButtonBox";
const Calculator = () => {
  const [primaryNo, setPrimaryNo] = useState("");
  const [secondaryNo, setSecondaryNo] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState();

  const calculate = () => {
    if (operator == "+") {
      setResult(parseInt(primaryNo) + parseInt(secondaryNo));
    } else if (operator == "-") {
      setResult(parseInt(primaryNo) - parseInt(secondaryNo));
    } else if (operator == "*") {
      setResult(parseInt(primaryNo) * parseInt(secondaryNo));
    } else if (operator == "/") {
      setResult(parseInt(primaryNo) / parseInt(secondaryNo));
    }
  };
  return (
    <>
      <Box component={"h1"} sx={{ color: "white" }}>
        Calculator using <span>React</span>
      </Box>
      <Container
        sx={{
          width: "30%",
          border: 1,
          p: 1,
          backgroundColor: "#62599c",
        }}
      >
        <InputField
          primaryNo={primaryNo}
          operator={operator}
          secondaryNo={secondaryNo}
        />
        <OutputField result={result} />
        <ButtonBox
          calculate={calculate}
          primaryNo={primaryNo}
          setPrimaryNo={setPrimaryNo}
          setOperator={setOperator}
          secondaryNo={secondaryNo}
          setSecondaryNo={setSecondaryNo}
        />
      </Container>
    </>
  );
};

export default Calculator;
