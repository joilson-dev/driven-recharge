import { Router } from "express";
import { phoneSchema } from "../schemas/phoneSchema";
import { validateSchema } from "../middlewares/validationMiddleware";
import { createPhone, getClientPhones } from "../controllers/phoneController";
import { documentSchema } from "../schemas/documentSchema";

const phoneRouter = Router();


phoneRouter.post(
  "/phones",
  validateSchema(phoneSchema, "body"),
  createPhone
);

phoneRouter.get(
  "/phones/:document",
  validateSchema(documentSchema, "params"),
  getClientPhones
);

export default phoneRouter;
