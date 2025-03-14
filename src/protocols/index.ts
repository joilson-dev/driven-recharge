export type Carrier = {
  id: number;
  name: string;
  code: number;
};

export type Client = {
  id: number;
  cpf: string;
  name: string;
};

export type Phone = {
  id: number;
  number: string;
  carrier_id: number;
  client_id: number;
  description: string;
};

export type Recharge = {
  id: number;
  phone_id: number;
  amount: number;
};

export type CreateClient = Omit<Client, "id">;
export type CreatePhone = Omit<Phone, "id">;
export type CreateRecharge = Omit<Recharge, "id">;