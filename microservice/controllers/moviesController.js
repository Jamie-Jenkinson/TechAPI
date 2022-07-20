import Movie from "../models/movie.js";

async function getAllMovies(req, res, next) {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
}

async function createNewMovie(req, res, next) {
  try {
    const newMovie = await Movie.create(req.body);

    return res.status(201).send(newMovie);
  } catch (error) {
    next(error);
  }
}
// /movies/:id
function getSingleMovie(req, res, next) {
  try {
    res.send(`GET request received on /movies/:id with id: ${req.params.id}.`); // req.params.id
  } catch (error) {
    next(error);
  }
}

function updateMovie(req, res, next) {
  try {
    res.send("Update Movie");
  } catch (error) {
    next(error);
  }
}

function deleteMovie(req, res, next) {
  try {
    res.send("POST request recieved by createNewMovie");
  } catch (error) {
    next(error);
  }
}

export default {
  getAllMovies,
  createNewMovie,
  getSingleMovie,
  updateMovie,
  deleteMovie,
};
