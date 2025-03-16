import Joi from "joi";

export const phoneSchema = Joi.object({
  client: Joi.object({
    cpf: Joi.string()
      .pattern(/^\d{11}$/)
      .required()
      .messages({
        "string.pattern.base": "CPF deve conter exatamente 11 dígitos numéricos.",
        "any.required": "CPF é obrigatório.",
      }),
  }).required(),

  phone: Joi.object({
    number: Joi.string()
      .pattern(/^\d{10,11}$/)
      .required()
      .messages({
        "string.pattern.base": "O número deve ter 10 ou 11 dígitos.",
        "any.required": "O número do telefone é obrigatório.",
      }),

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


export const phoneNumberSchema = Joi.object({
  number: Joi.string()
    .pattern(/^\d{10,11}$/)
    .required()
    .messages({
      "string.pattern.base": "Número deve ter 10 ou 11 dígitos.",
      "any.required": "Número do telefone é obrigatório.",
    }),
});