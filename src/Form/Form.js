import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    console.log("refresh");
  }, []);

  let style = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "50px",
  };

  const updateDescription = ({ target }) => {
    setDescription(target.value);
  };

  const updateSku = ({ target }) => {
    setSku(target.value);
  };

  const updatePrice = ({ target }) => {
    setPrice(target.value);
  };

  const submitButton = () => {
    const data = {
      sku: parseInt(sku),
      descriptions: description,
      price: parseFloat(price),
    };

    setDescription("");
    setPrice("");
    setSku("");

    console.log(data);
  };

  return (
    <Box
      style={{
        margin: "0 auto",
        width: "70%",
        padding: "20px 40px",
        border: "5px solid ",
        borderRadius: "30px",
      }}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Add New Product to Inventory
      </h2>
      <div style={style}>
        <TextField
          onChange={updateSku}
          value={sku}
          id="outlined-multiline-flexible"
          label="SKU"
          multiline
          maxRows={4}
        />
        <TextField
          onChange={updateDescription}
          value={description}
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
        />
        <TextField
          onChange={updatePrice}
          value={price}
          id="outlined-multiline-flexible"
          label="Price"
          multiline
          maxRows={4}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={submitButton}
          style={{ fontSize: "1.4rem" }}
          variant="contained"
        >
          Add
        </Button>
      </div>
    </Box>
  );
}
