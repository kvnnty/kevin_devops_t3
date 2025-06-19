const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, DevOps!");
});

app.listen(port, () => {
  console.log(`[log] server running at http://localhost:${port}`);
});
