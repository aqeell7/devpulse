import mongoose, { Schema, Document } from "mongoose";

export interface IRelease extends Document {
  projectId: mongoose.Types.ObjectId;
  version: string;
  type: "Release" | "Push" | "PR";
  rawCommits: Record<string, any>[];
  aiSummary: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ReleaseSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Release", "Push", "PR"],
      required: true,
    },
    rawCommits: {
      type: [Schema.Types.Mixed],
      default: [],
    },
    aiSummary: {
      type: String,
    },
  },
  { timestamps: true }
);

const Release = mongoose.model<IRelease>("Release", ReleaseSchema);
export default Release;