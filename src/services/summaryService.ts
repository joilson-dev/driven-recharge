import * as clientRepository from "../repositories/clientRepository";
import * as phoneRepository from "../repositories/phoneRepository";

export async function getClientSummary(document: string) {
  const client = await clientRepository.findClientByCPF(document);

  if (!client) {
    return { document, phones: [] };
  }

  const phonesWithDetails = await phoneRepository.findPhonesWithDetails(client.id);

  return {
    document: client.cpf,
    phones: phonesWithDetails,
  };
}