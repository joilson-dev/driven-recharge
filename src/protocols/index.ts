export type Carrier = {
  id: number;
  name: string;
  code: number;
};

export type Client = {
  id: number;
  cpf: string;
};

export type Phone = {
  id: number;
  number: string;
  carrier_id: number;
  name: string;
  description: string;
  client_id: number;
};

export type Recharge = {
  id: number;
  phone_id: number;
  amount: number;
};

export type CreateClient = Omit<Client, "id">;
export type CreatePhoneWithClientDTO = {
  client: Omit<Client, "id">;
  phone: Omit<Phone, "id" | "client_id" | "carrier_id">;
};

export type CreateRecharge = Omit<Recharge, "id">;