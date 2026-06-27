import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    technologies: {
      type: [String],
      required: true,
      default: [],
    },

    githubUrl: {
      type: String,
      required: true,
    },

    liveUrl: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "Full Stack"],
    },

    status: {
      type: String,
      enum: ["Completed", "In Progress"],
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model("Project", projectSchema);
export default Project;