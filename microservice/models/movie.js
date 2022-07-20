import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseYear: Number,
  genre: String,
});

export default mongoose.model("Movie", movieSchema);
