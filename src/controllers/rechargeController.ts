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


export async function getRechargesByNumber(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { number } = req.params;

  try {
    const recharges = await rechargeService.getRechargesByNumber(number);
    res.status(200).json(recharges);
  } catch (err) {
    next(err);
  }
}