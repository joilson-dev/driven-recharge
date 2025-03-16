import { Router } from "express";
import { validateSchema } from "../middlewares/validationMiddleware";
import { summarySchema } from "../schemas/summarySchema";
import { getClientSummary } from "../controllers/summaryController";

const summaryRouter = Router();

summaryRouter.get(
  "/summary/:document",
  validateSchema(summarySchema, "params"),
  getClientSummary
);

export default summaryRouter;