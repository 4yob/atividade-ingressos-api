const pool = require("../config/database");

const getTickets = async () => {
    const result = await pool.query("SELECT * FROM tickets");
    return result.rows;
};

const getTicketById = async (id) => {
    const result = await pool.query("SELECT * FROM tickets WHERE id = $1", [id]);
    return result.rows[0];
};

const createTicket = async (evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "INSERT INTO tickets (evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [evento, local, data_evento, categoria, preco, quantidade_disponivel]
    );
    return result.rows[0];
};

const updateTicket = async (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "UPDATE tickets SET evento = $1, local = $2, data_evento = $3, categoria = $4, preco = $5, quantidade_disponivel = $6 WHERE id = $7 RETURNING *",
        [evento, local, data_evento, categoria, preco, quantidade_disponivel, id]
    );
    return result.rows[0];
};

const deleteTicket = async (id) => {
    const result = await pool.query("DELETE FROM tickets WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado." };
    }

    return { message: "Ingresso deletado com sucesso.",  };
};

const buyTicket = async (id, quantidade_comprada) => {
    const ticket = await pool.query("SELECT * FROM tickets WHERE id = $1", [id]);
    let quantidade_disponivel = ticket.rows[0].quantidade_disponivel;

    if (quantidade_disponivel < quantidade_comprada) {
        return { error: "Há menos ingressos disponíveis do que deseja comprar. Tente novamente" };
    }
    
    let { evento, local, data_evento, categoria, preco } = ticket.rows[0];

    quantidade_disponivel -= quantidade_comprada;
    const result = await pool.query(
        "UPDATE tickets SET quantidade_disponivel = $2 WHERE id = $1 RETURNING *",
        [id, quantidade_disponivel]
    );
    return { message: "Ingresso comprado com sucesso!", evento, local, data_evento, categoria, preco, quantidade_comprada, quantidade_disponivel};
}

module.exports = { getTickets, getTicketById, createTicket, updateTicket, deleteTicket, buyTicket };