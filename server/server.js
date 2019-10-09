const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/../dist")));

app.get("/termsofuse", function(req, res) {
  res.sendFile(path.join(__dirname, "/../dist/termsOfUse.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/../dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
