import Joi from "joi";
import { phoneNumberSchema } from "./commonSchemas";

export const rechargeSchema = Joi.object({
  phoneId: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "O ID do telefone deve ser um número",
      "number.integer": "O ID do telefone deve ser um número inteiro",
      "number.positive": "O ID do telefone deve ser um número positivo",
      "any.required": "O ID do telefone é obrigatório"
    }),
  amount: Joi.number().min(10).max(1000).required().messages({
    "number.base": "O valor da recarga deve ser um número.",
    "number.min": "O valor da recarga deve ser no mínimo R$10,00.",
    "number.max": "O valor da recarga deve ser no máximo R$1.000,00.",
    "any.required": "O valor da recarga é obrigatório.",
  }),
});
