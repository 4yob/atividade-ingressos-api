const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");

router.get("/tickets", ticketController.getAllTickets);
router.get("/tickets/:id", ticketController.getTicket);
router.post("/tickets", ticketController.createTicket);
router.put("/tickets/:id", ticketController.updateTicket);
router.delete("/tickets/:id", ticketController.deleteTicket);
router.post("/tickets/buy", ticketController.buyTicket);

module.exports = router;