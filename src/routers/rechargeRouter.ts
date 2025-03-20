import { Router } from "express";
import { validateSchema } from "../middlewares/validationMiddleware";
import { rechargeSchema } from "../schemas/rechargeSchema";
import { createRecharge } from "../controllers/rechargeController";
import { phoneNumberSchema } from "../schemas/commonSchemas";
import { getRechargesByNumber } from "../controllers/rechargeController";
import Joi from "joi";

const rechargeRouter = Router();

rechargeRouter.post(
  "/recharges",
  validateSchema(rechargeSchema, "body"),
  createRecharge
);
rechargeRouter.get(
  "/recharges/:number",
  validateSchema(Joi.object({ number: phoneNumberSchema }), "params"),
  getRechargesByNumber
);

export default rechargeRouter;