const express = require("express");

const app = express();

app.get("/", (req, resp) => {
  resp.end("test");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
