import Joi from "joi";
import { cpfSchema, phoneNumberSchema } from "./commonSchemas";

export const phoneSchema = Joi.object({
  client: Joi.object({
    cpf: cpfSchema,
  }).required(),

  phone: Joi.object({
    number: phoneNumberSchema,
    name: Joi.string()
      .min(3)
      .max(255)
      .required()
      .messages({
        "string.min": "O nome deve ter pelo menos 3 caracteres.",
        "string.max": "O nome não pode ter mais que 255 caracteres.",
        "any.required": "O nome do telefone é obrigatório.",
      }),
    description: Joi.string()
      .min(5)
      .max(255)
      .required()
      .messages({
        "string.min": "A descrição deve ter pelo menos 5 caracteres.",
        "string.max": "A descrição não pode ter mais que 255 caracteres.",
        "any.required": "A descrição do telefone é obrigatória.",
      }),
  }).required(),
});