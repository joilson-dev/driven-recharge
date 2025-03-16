import { Router } from "express";
import { phoneSchema } from "../schemas/phoneSchema";
import { validateSchema } from "../middlewares/validationMiddleware";
import { createPhone } from "../controllers/phoneController";

const phoneRouter = Router();

phoneRouter.post("/phones", validateSchema(phoneSchema), createPhone);

export default phoneRouter;
