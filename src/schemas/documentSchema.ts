import Joi from "joi";
import { cpfSchema } from "./commonSchemas";

export const documentSchema = Joi.object({
  document: cpfSchema,
});