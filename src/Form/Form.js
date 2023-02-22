import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
  let style = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "50px",
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
          id="outlined-multiline-flexible"
          label="SKU"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
        />
        <TextField
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
        <Button style={{ fontSize: "1.4rem" }} variant="contained">
          Add
        </Button>
      </div>
    </Box>
  );
}
