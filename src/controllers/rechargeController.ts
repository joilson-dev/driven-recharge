import { Request, Response, NextFunction } from "express";
import * as rechargeService from "../services/rechargeService";

export async function createRecharge(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { phoneId, amount } = req.body;

  try {
    const recharge = await rechargeService.createRecharge(phoneId, amount);
    res.status(201).json(recharge);
  } catch (err) {
    next(err);
  }
}