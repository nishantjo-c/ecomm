const express = require("express");
const app = express();
const router = require("./router.js");
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("server running at 3000");
});
