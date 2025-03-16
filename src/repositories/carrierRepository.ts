import { connection } from "../config/bd";

export async function findCarrierByDDD(ddd: string) {
  const result = await connection.query(
    "SELECT id FROM carriers WHERE code = $1",
    [ddd]
  );
  return result.rows[0] || null;
}

export async function findPhonesByCPF(cpf: string) {
  const result = await connection.query(
    `SELECT
      phones.id,
      phones.number,
      phones.name,
      phones.description,
      carriers.name AS "carrierName"
     FROM phones
     INNER JOIN clients ON phones.client_id = clients.id
     INNER JOIN carriers ON phones.carrier_id = carriers.id
     WHERE clients.cpf = $1`,
    [cpf]
  );
  return result.rows;
}