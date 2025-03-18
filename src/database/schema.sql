CREATE DATABASE bilheteria_db;

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255),
    local VARCHAR(255),
    data_evento DATE,
    categoria VARCHAR(50),
    preco DECIMAL(10,2),
    quantidade_disponivel INTEGER
);

INSERT INTO tickets (evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES ('Show Natiruts', 'Allianz Parque', '20-04-2025', 'Pista VIP', 200.00, 15), ('Show Cláudia Leite', 'Ibirapuera', '12-05-2025', 'Arquibancada', 80.00, 0), ('Concerto Clara Nunes', 'Teatro', '09-09-2025', 'Camarote', 300.00, 8);