import express from "express";
import moviesController from "../controllers/moviesController.js";

const Router = express.Router();

Router.route("/").get((req, res, next) => {
  res.send("Hello world! from config/router.js");
});

Router.route("/movies")
  .get(moviesController.getAllMovies)
  .post(moviesController.createNewMovie);

// /api/movies/some-kind-of-id
Router.route("/movies/:id")
  .get(moviesController.getSingleMovie)
  .put(moviesController.updateMovie)
  .delete(moviesController.deleteMovie);

export default Router;
