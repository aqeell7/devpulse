import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  githubUrl: string;
  webhookSecret?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      required: true,
      unique: true,
    },
    webhookSecret: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model<IProject>("Project", ProjectSchema);
export default Project;