import Joi from "joi";

export const summarySchema = Joi.object({
  document: Joi.string()
    .length(11)
    .pattern(/^\d+$/)
    .required()
    .messages({
      "string.length": "CPF deve ter exatamente 11 dígitos.",
      "string.pattern.base": "CPF deve conter apenas números.",
      "any.required": "CPF é obrigatório.",
    }),
});