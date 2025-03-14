import Joi from "joi";

export const phoneSchema = Joi.object({
  number: Joi.string()
    .pattern(/^\d{10,11}$/)
    .required()
    .messages({
      "string.pattern.base": "O número deve ter 10 ou 11 dígitos.",
      "any.required": "O número do telefone é obrigatório.",
    }),
  document: Joi.string()
    .length(11)
    .pattern(/^\d+$/)
    .required()
    .messages({
      "string.length": "O documento deve ter exatamente 11 dígitos.",
      "string.pattern.base": "O documento deve conter apenas números.",
      "any.required": "O documento do cliente é obrigatório.",
    }),
});
