const express = require("express");
const app = express();
const cors = require("cors");

// MIDDELWARE
app.use(express.json());
app.use(cors());

// IMPORT ROUTERS
const r_users = require("./routers/users");
const r_clubs = require("./routers/clubs");
const r_courts = require("./routers/courts");
const r_bookings = require("./routers/bookings");
const r_favorites = require("./routers/favorites");
const r_payments = require("./routers/payments");

// ROUTERS
app.use('/users', r_users);
app.use('/clubs', r_clubs);
app.use('/courts', r_courts);
app.use('/bookings', r_bookings);
app.use('/favorites', r_favorites);
app.use('/payments', r_payments);

function prueba(){
	console.log('Escuchando el puerto 3000');
}

app.listen(3000, prueba());
