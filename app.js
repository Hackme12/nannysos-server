const express = require("express");
const mongoRouter = require("./src/routers/mongoRouter");

const app = express();

const PORT = 5173;

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));

app.get("/", (req, res) => res.send(`Server Running on port: ${PORT}`));

app.use("/api/mongo", mongoRouter);
