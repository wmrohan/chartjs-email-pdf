
/**
 * Required External Modules
 */

const express = require("express");





/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

// index.js

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("welcome to chartjs-excel");
  });



/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Fileupload to requests on http://localhost:${port}`);

  });