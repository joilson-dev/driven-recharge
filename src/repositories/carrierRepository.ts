import { connection } from "../config/bd";

export async function findCarrierByDDD(ddd: string) {
  const result = await connection.query(
    "SELECT id FROM carriers WHERE code = $1",
    [ddd]
  );
  return result.rows[0] || null;
}