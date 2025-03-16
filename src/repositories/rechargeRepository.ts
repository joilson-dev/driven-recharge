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