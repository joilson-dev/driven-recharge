import { Request, Response, NextFunction } from "express";
import * as phoneService from "../services/phoneService";
import { CreatePhoneWithClientDTO } from "../protocols";

export async function createPhone(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const phoneData: CreatePhoneWithClientDTO = req.body;

  try {
    const newPhone = await phoneService.createPhone(phoneData);
    res.status(201).json(newPhone);
  } catch (err) {
    next(err);
  }
}