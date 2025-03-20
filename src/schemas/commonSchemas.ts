import Joi from "joi";

export const cpfSchema = Joi.string()
  .pattern(/^\d{11}$/)
  .required()
  .messages({
    "string.pattern.base": "CPF deve conter exatamente 11 dígitos numéricos.",
    "any.required": "CPF é obrigatório.",
  });

export const phoneNumberSchema = Joi.string()
  .pattern(/^\d{10,11}$/)
  .required()
  .messages({
    "string.pattern.base": "Número deve ter 10 ou 11 dígitos.",
    "any.required": "Número do telefone é obrigatório.",
  });
