const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/catch-cep", (req, res) => {
  const url = `https://viacep.com.br/ws/${req.body.post}/json`;
  const getData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      res.send(json);
    } catch (error) {
      console.log(error);
    }
  };
  getData(url);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
