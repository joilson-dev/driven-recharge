# Driven Recharge API

API para gestão de recargas de telefonia, permitindo cadastro de clientes, números de telefone e recargas com validações e regras de negócio.

---

## 🚀 Funcionalidades

- **Cadastro de telefones**
  Registre números vinculados a um CPF, com operadora baseada no DDD.
- **Recargas**
  Adicione créditos entre R$10,00 e R$1.000,00 para números cadastrados.
- **Listagem de recargas**
  Consulte todas as recargas de um número de telefone.
- **Resumo consolidado**
  Obtenha todos os números e recargas de um cliente via CPF.

---

## 🛠️ Tecnologias

- **Backend**: Node.js + Express + TypeScript
- **Banco de Dados**: PostgreSQL (Render)
- **Validação**: Joi
- **Deploy**: Render

---

## ⚙️ Instalação

### Clone o repositório
```bash
git clone https://github.com/joilson-dev/driven-recharge.git

```
### Instale as dependências
```bash
npm install
```

### Configure o ambiente (renomeie o arquivo .env.example para .env)
cp .env.example .env

### 🔧 Configuração
```bash
DATABASE_URL="postgres://user:senha@host.oregon-postgres.render.com/database?ssl=true"
PORT=5000
```
### Estrutura do Banco
Execultar o SQL(src\create-tables.sql) no banco de dados

# 📡 API de Recargas

## Endpoints da API

### 1. Cadastrar Telefone
**POST** `/phones`

#### Corpo da requisição:
```json
{
  "client": { "cpf": "12345678901" },
  "phone": {
    "number": "11999999999",
    "name": "Celular",
    "description": "iPhone 15"
  }
}
```

### 2. Recarregar Telefone
**POST** `/recharges/:number`

#### Corpo da requisição:
```json
{
  "amount": 50.00
}
```

### 3. Listar Recargas
**GET** `/recharges/11999999999`

#### Resposta:
```json
[
  {
    "amount": 50.00,
    "created_at": "2024-03-16T12:34:56.789Z",
    "carrierName": "Vivo"
  }
]
```

### 4. Resumo do Cliente
**GET** `/summary/12345678901`

#### Resposta:
```json
{
  "document": "12345678901",
  "phones": [
    {
      "number": "11999999999",
      "carrier": { "name": "Vivo", "code": 11 },
      "recharges": [ { "amount": 50.00, "created_at": "2024-03-16T12:34:56.789Z" } ]
    }
  ]
}
```
