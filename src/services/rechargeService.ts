import * as rechargeRepository from "../repositories/rechargeRepository";

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