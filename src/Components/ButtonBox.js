import { Button, buttonGroupClasses, colors, Container } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

const MyBtn = styled("button")({
  width: "70px",
  height: "70px",
  fontSize: "25px",
  margin: "2px",
  borderRadius: "5px",
  ":hover": {
    backgroundColor: "#1702a1",
    color: "white",
  },
});
const SubmitBtn = styled("button")({
  width: "70px",
  height: "70px",
  borderRadius: "5px",
  fontSize: "25px",
  margin: "2px",
  backgroundColor: "#4ae06b",
  ":hover": {
    backgroundColor: "#b00208",
    color: "white",
  },
});
const OperatorBtn = styled("button")({
  borderRadius: "5px",
  width: "70px",
  height: "70px",
  fontSize: "25px",
  margin: "2px",
  backgroundColor: "#4ae06b",
  ":hover": {
    backgroundColor: "#1702a1",
    color: "white",
  },
});

const ButtonBox = ({
  calculate,
  primaryNo,
  setPrimaryNo,
  setOperator,
  secondaryNo,
  setSecondaryNo,
}) => {
  const [isOpCalled, setIsOpCalled] = useState(false);

  const handleNoChange = (val) => {
    if (isOpCalled == true) {
      setSecondaryNo(secondaryNo.concat(val));
    } else {
      setPrimaryNo(primaryNo.concat(val));
    }
  };

  const handleOperator = (op) => {
    setOperator(op);
    setIsOpCalled(true);
  };

  return (
    <>
      <Container>
        <MyBtn onClick={() => handleNoChange("1")}>1</MyBtn>
        <MyBtn onClick={() => handleNoChange("2")}>2</MyBtn>
        <MyBtn onClick={() => handleNoChange("3")}>3</MyBtn>
        <OperatorBtn onClick={() => handleOperator("+")}>+</OperatorBtn>
      </Container>
      <Container>
        <MyBtn onClick={() => handleNoChange("4")}>4</MyBtn>
        <MyBtn onClick={() => handleNoChange("5")}>5</MyBtn>
        <MyBtn onClick={() => handleNoChange("6")}>6</MyBtn>
        <OperatorBtn onClick={() => handleOperator("-")}>-</OperatorBtn>
      </Container>
      <Container>
        <MyBtn onClick={() => handleNoChange("7")}>7</MyBtn>
        <MyBtn onClick={() => handleNoChange("8")}>8</MyBtn>
        <MyBtn onClick={() => handleNoChange("9")}>9</MyBtn>
        <OperatorBtn onClick={() => handleOperator("*")}>X</OperatorBtn>
      </Container>
      <MyBtn>.</MyBtn>
      <MyBtn onClick={() => handleNoChange("0")}>0</MyBtn>
      <SubmitBtn onClick={calculate}>=</SubmitBtn>
      <OperatorBtn onClick={() => handleOperator("/")}>/</OperatorBtn>
    </>
  );
};

export default ButtonBox;
