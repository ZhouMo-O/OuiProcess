module.exports = (app) => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });

  app.use(router);

  router.get("/getData", async (req, res) => {
    res.send("send data");
  });
};
