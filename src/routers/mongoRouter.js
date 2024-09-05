const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const { getAllReview } = require("../helpers/mongoHelpers");
const { isEmpty } = require("../libs/core");

const app = express.Router();

const PORT = 5000;

app.get("/getReviews", async (req, res) => {
  console.log("Getting MongoDB");
  const x = await getAllReview();
  res.send(x);
});

app.post("/postReview", async (req, res) => {
  if (isEmpty(req?.body)) {
    throw new Error("There is no reviews to insert to database.");
  }
});

module.exports = app;
