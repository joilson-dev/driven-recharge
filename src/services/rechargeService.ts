import * as rechargeRepository from "../repositories/rechargeRepository";

import * as phoneRepository from "../repositories/phoneRepository";

export async function createRecharge(phoneId: number, amount: number) {
  const phone = await rechargeRepository.findPhoneById(phoneId);
  if (!phone) {
    throw { type: "NotFound", message: "Telefone não encontrado." };
  }

  const recharge = await rechargeRepository.insertRecharge({
    phone_id: phoneId,
    amount,
  });

  return recharge;
}

export async function getRechargesByNumber(number: string) {
  const phoneExists = await phoneRepository.findPhoneByNumber(number);
  if (!phoneExists) {
    return [];
  }

  const recharges = await rechargeRepository.findRechargesByPhoneNumber(number);
  return recharges;
}