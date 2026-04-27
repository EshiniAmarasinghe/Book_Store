import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      enum: [
        "Fiction",
        "Non-Fiction",
        "Science Fiction",
        "Mystery",
        "Romance",
        "Biography",
        "History"
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
