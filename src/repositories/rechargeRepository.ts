import { connection } from "../config/bd";
import { Recharge } from "../protocols";
import { Phone } from "../protocols";

export async function insertRecharge(rechargeData: Omit<Recharge, "id">) {
  const result = await connection.query<Recharge>(
    `INSERT INTO recharges (phone_id, amount)
     VALUES ($1, $2) RETURNING *`,
    [rechargeData.phone_id, rechargeData.amount]
  );
  return result.rows[0];
}

export async function findPhoneById(id: number): Promise<Phone | null> {
  const result = await connection.query<Phone>(
    "SELECT * FROM phones WHERE id = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function findRechargesByPhoneNumber(number: string) {
  const result = await connection.query(
    `SELECT
      recharges.amount,
      carriers.name AS "carrierName"
     FROM recharges
     JOIN phones ON recharges.phone_id = phones.id
     JOIN carriers ON phones.carrier_id = carriers.id
     WHERE phones.number = $1`,
    [number] 
  );
  return result.rows;
}