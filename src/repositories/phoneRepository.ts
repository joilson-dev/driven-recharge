import { connection } from "../config/bd";
import { Phone } from "../protocols";

export async function insertPhone(phoneData: Omit<Phone, "id">) {
  const result = await connection.query<Phone>(
    `INSERT INTO phones (number, carrier_id, name, description, client_id)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [
      phoneData.number,
      phoneData.carrier_id,
      phoneData.name,
      phoneData.description,
      phoneData.client_id
    ]
  );
  return result.rows[0];
}


export async function findPhoneByNumberAndCPF(number: string, cpf: string) {
  const result = await connection.query<Phone>(
    `SELECT phones.*
     FROM phones
     INNER JOIN clients ON phones.client_id = clients.id
     WHERE phones.number = $1 AND clients.cpf = $2`,
    [number, cpf]
  );
  return result.rows[0] || null;
}