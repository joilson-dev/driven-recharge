import Joi from "joi";
import { cpfSchema } from "./commonSchemas";

export const summarySchema = Joi.object({
  document: cpfSchema,
});