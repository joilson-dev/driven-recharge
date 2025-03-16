import * as phoneRepository from "../repositories/phoneRepository";
import * as clientRepository from "../repositories/clientRepository";
import * as carrierRepository from "../repositories/carrierRepository";
import { CreatePhoneWithClientDTO } from "../protocols";

export async function createPhone(phoneData: CreatePhoneWithClientDTO) {
  let client = await clientRepository.findClientByCPF(phoneData.client.cpf);
  if (!client) {
    client = await clientRepository.insertClient({ cpf: phoneData.client.cpf });
  }

  const ddd = phoneData.phone.number.substring(0, 2);
  const carrier = await carrierRepository.findCarrierByDDD(ddd);
  if (!carrier) {
    throw { type: "NotFound", message: "Operadora não encontrada para o DDD." };
  }

  const phonesCount = await clientRepository.countPhonesByCPF(phoneData.client.cpf);
if (phonesCount >= 3) {
  throw {
    type: "Conflict",
    message: "Limite de 3 números por CPF atingido."
  };
}
  const existingPhone = await phoneRepository.findPhoneByNumberAndCPF(
    phoneData.phone.number,
    phoneData.client.cpf
  );

  if (existingPhone) {
    throw {
      type: "Conflict",
      message: "Este número já está cadastrado para este CPF."
    };
  }


  const newPhone = await phoneRepository.insertPhone({
    ...phoneData.phone,
    client_id: client.id,
    carrier_id: carrier.id
  });

  return newPhone;
}