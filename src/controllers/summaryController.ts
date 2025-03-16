import { Request, Response, NextFunction } from "express";
import * as summaryService from "../services/summaryService";

export async function getClientSummary(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { document } = req.params;

  try {
    const summary = await summaryService.getClientSummary(document);
    res.status(200).json(summary);
  } catch (err) {
    next(err);
  }
}