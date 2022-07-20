// Import express
import express from "express";
import Router from "./config/router.js";
import { connectDb } from "./db/helpers.js";
import { PORT } from "./config/environment.js";

//initialise project
const app = express();

app.use(express.json());

//Set up a route
app.use("/api", Router);

// Start a server

async function startServer() {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log("Server started. Listening on port. ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
