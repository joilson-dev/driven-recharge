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

export async function findPhoneByNumber(number: string): Promise<Phone | null> {
  const result = await connection.query<Phone>(
    "SELECT * FROM phones WHERE number = $1",
    [number]
  );
  return result.rows[0] || null;
}


export async function findPhonesWithDetails(clientId: number) {
  const result = await connection.query(
    `SELECT
      phones.id,
      phones.number,
      phones.name,
      phones.description,
      carriers.id AS "carrierId",
      carriers.name AS "carrierName",
      carriers.code AS "carrierCode",
      COALESCE(
        json_agg(
          json_build_object(
            'id', recharges.id,
            'amount', recharges.amount
          )
        ) FILTER (WHERE recharges.id IS NOT NULL),
        '[]'
      ) AS recharges
     FROM phones
     LEFT JOIN recharges ON phones.id = recharges.phone_id
     INNER JOIN carriers ON phones.carrier_id = carriers.id
     WHERE phones.client_id = $1
     GROUP BY phones.id, carriers.id`,
    [clientId]
  );

  return result.rows.map(row => ({
    id: row.id,
    number: row.number,
    name: row.name,
    description: row.description,
    carrier: {
      id: row.carrierId,
      name: row.carrierName,
      code: row.carrierCode,
    },
    recharges: row.recharges,
  }));
}