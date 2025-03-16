import Joi from "joi";

export const documentSchema = Joi.object({
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