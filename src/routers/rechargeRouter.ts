import { Router } from "express";
import { validateSchema } from "../middlewares/validationMiddleware";
import { rechargeSchema } from "../schemas/rechargeSchema";
import { createRecharge } from "../controllers/rechargeController";

const rechargeRouter = Router();

rechargeRouter.post(
  "/recharges",
  validateSchema(rechargeSchema, "body"),
  createRecharge
);

export default rechargeRouter;