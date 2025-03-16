import { Router } from "express";
import { validateSchema } from "../middlewares/validationMiddleware";
import { rechargeSchema } from "../schemas/rechargeSchema";
import { createRecharge } from "../controllers/rechargeController";
import { phoneNumberSchema } from "../schemas/phoneSchema";
import { getRechargesByNumber } from "../controllers/rechargeController";

const rechargeRouter = Router();

rechargeRouter.post(
  "/recharges",
  validateSchema(rechargeSchema, "body"),
  createRecharge
);
rechargeRouter.get(
  "/recharges/:number",
  validateSchema(phoneNumberSchema, "params"),
  getRechargesByNumber
);

export default rechargeRouter;