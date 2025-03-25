## ATIVIDADE-BILHETERIA-BD-API

  Esta atividade de Back-End tem como o objetivo criar rotas CRUD para uma bilheteria com ingressos de diversos eventos utilizando a linguagem JavaScript e integrando-a com Banco de Dados (sql).

  #### Tickets:
  
  #### - atributos

  - id - SERIAL PK
  - evento - VARCHAR(255)
  - local - VARCHAR(255)
  - data_evento - DATE
  - categoria - VARCHAR(50)
  - preco - DECIMAL(10,2)
  - quantidade_disponivel - INTEGER

  #### - ações

  - getAllTickets
  - getTicket
  - createTicket
  - updateTicket
  - deleteTicket
  - buyTicket

  A partir disso, os ingressos serão manipulados diretamente com suas criações, verificações e leituras, edições, remoções e compras/vendas, tanto no **Postman**, quanto no **PSQL**.

  #### Aplicações/Apps:
  
  - Postman
  - VSCode
  - SQL Shell (psql)

  #### Dependências (bibliotecas):
  
  - express
  - dotenv
  - nodemon
  - cors
  - pg
  
### ROTAS POSTMAN

  ### GET TICKETS

  Esta rota serve para a listagem de todos os ingressos - fixos e adicionados posteriormente.

  ```
  http://localhost:3000/api/tickets
  ```

  #### Body

  ```
  {
        "id": 1,
        "evento": "Show Natiruts",
        "local": "Allianz Parque",
        "data_evento": "2025-04-20T03:00:00.000Z",
        "categoria": "Pista VIP",
        "preco": "200.00",
        "quantidade_disponivel": 9
    },
  {
        "id": 3,
        "evento": "Concerto Clara Nunes",
        "local": "Teatro",
        "data_evento": "2025-09-09T03:00:00.000Z",
        "categoria": "Camarote",
        "preco": "300.00",
        "quantidade_disponivel": 8
    },
  {
        "id": 4,
        "evento": "Peça Meninas Malvadas",
        "local": "Teatro Santander",
        "data_evento": "2025-04-05T03:00:00.000Z",
        "categoria": "Pista",
        "preco": "100.00",
        "quantidade_disponivel": 0
    }
  ```
  
  ### GET TICKET BY ID

  Esta rota é responsável pela busca de um ingresso pelo seu **ID**.

  ```
  http://localhost:3000/api/tickets/3
  ```

  #### Body

  ```
  {
    "id": 3,
    "evento": "Concerto Clara Nunes",
    "local": "Teatro",
    "data_evento": "2025-09-09T03:00:00.000Z",
    "categoria": "Camarote",
    "preco": "300.00",
    "quantidade_disponivel": 8
}
```

 ### POST ADD TICKET

  Esta rota serve para adicionar um ingresso, respeitando as requisições de seu modelo.
  **{evento, local, data_evento, categoria, preco, quantidade_disponivel}**

  ```
  http://localhost:3000/api/tickets
  ```

  #### Requisição

  ```
  {
    "evento": "Peça Meninas Malvadas",
    "local": "Teatro Santander",
    "data_evento": "05-04-2025", 
    "categoria": "Pista", 
    "preco": 100.00, 
    "quantidade_disponivel": 40
}
  ```

  #### Body

  ```
  {
    "id": 5,
    "evento": "Peça Meninas Malvadas",
    "local": "Teatro Santander",
    "data_evento": "2025-04-05T03:00:00.000Z",
    "categoria": "Pista",
    "preco": "100.00",
    "quantidade_disponivel": 40
}
```

### PUT UPDATE TICKET

  A rota PUT serve para atualizar os atributos de um ingresso a partir de seu **ID**.

  ```
  http://localhost:3000/api/tickets/2
  ```

  #### Requisição

  ```
  {
    "evento": "Peça Quebra Nozes",
    "local": "Teatro Municipal Valinhos",
    "data_evento": "31-12-2025", 
    "categoria": "Pista VIP", 
    "preco": 200.00, 
    "quantidade_disponivel": 2
}
  ```

  #### Body

  ```
  {
    "id": 2
    "evento": "Peça Quebra Nozes",
    "local": "Teatro Municipal Valinhos",
    "data_evento": "31-12-2025", 
    "categoria": "Pista VIP", 
    "preco": 200.00, 
    "quantidade_disponivel": 2
}
```

  ### DELETE TICKET

  A rota DELETE é responsável pela remoção de um ingresso a partir de seu **ID**.

  ```
  http://localhost:3000/api/tickets/2
  ```

  #### Body

  ```
  {
    message: "Ingresso deletado com sucesso."
}
```

### POST BUY TICKET

  Por fim, esta rota **POST buy ticket** é responsável pela compra de um ingresso, solicitando seu **ID** - para identificar o evento - e a quantidade que se deseja comprar. Nesta rota há verificações de disponibilidade de ingressos em relação a quantos se deseja comprar.

  ```
  http://localhost:3000/api/tickets/buy
  ```

  #### Requisição

  ```
  {
    "id": 1,
    "quantidade_comprada": 3
}
  ```

  #### Body

  ```
  {
    "message": "Ingresso comprado com sucesso!",
    "evento": "Show Natiruts",
    "local": "Allianz Parque",
    "data_evento": "2025-04-20T03:00:00.000Z",
    "categoria": "Pista VIP",
    "preco": "200.00",
    "quantidade_comprada": 3,
    "quantidade_disponivel": 6
}
```
