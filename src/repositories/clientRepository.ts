import { connection } from "../config/bd";
import { Client, CreateClient } from "../protocols";


export async function findClientByCPF(cpf: string): Promise<Client | null> {
  const result = await connection.query<Client>(
    "SELECT * FROM clients WHERE cpf = $1",
    [cpf]
  );
  return result.rows[0] || null;
}


export async function insertClient(client: CreateClient): Promise<Client> {
  try {
    const result = await connection.query<Client>(
      "INSERT INTO clients (cpf) VALUES ($1) RETURNING *",
      [client.cpf]
    );

    if (result.rows.length === 0) {
      throw new Error("Falha ao inserir cliente");
    }

    return result.rows[0];
  } catch (error) {
    console.error("[ERRO] insertClient:", error.message);
    throw { type: "Conflict", message: "CPF já cadastrado" };
  }
}

export async function countPhonesByCPF(cpf: string): Promise<number> {
  const result = await connection.query<{ count: string }>(
    `SELECT COUNT(*) FROM phones
     INNER JOIN clients ON phones.client_id = clients.id
     WHERE clients.cpf = $1`,
    [cpf]
  );
  return parseInt(result.rows[0].count);
}