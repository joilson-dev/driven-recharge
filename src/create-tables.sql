CREATE TABLE carriers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    code INT NOT NULL
);

INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    cpf VARCHAR(11) UNIQUE NOT NULL
);

CREATE TABLE phones (
    id SERIAL PRIMARY KEY,
    number VARCHAR(11) NOT NULL,
    carrier_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    client_id INT NOT NULL,
    FOREIGN KEY (carrier_id) REFERENCES carriers (id) ON DELETE RESTRICT,
    FOREIGN KEY (client_id) REFERENCES clients (id) ON DELETE CASCADE
);

CREATE TABLE recharges (
    id SERIAL PRIMARY KEY,
    phone_id INT NOT NULL,
    amount DECIMAL(10,2) CHECK (amount BETWEEN 10.00 AND 1000.00),
    FOREIGN KEY (phone_id) REFERENCES phones (id) ON DELETE CASCADE
);
