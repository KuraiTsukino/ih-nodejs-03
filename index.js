// 1. Importaciones
const express = require ("express")
const app = express ()
// se realiza una importación con la variable hbs
const hbs = require("hbs")
// la forma de hacer funcionar dotenv en el proyecto
require("dotenv").config()

// 2. Middlewares
// Reconocer carpeta public. Se crea public con images y stylesheets.
app.use(express.static('public'))
// Activar handlebars
app.set ("views", __dirname + "/views")
app.set("view engine", "hbs")
// se hace la activación de los partials dentro del proyecto.
hbs.registerPartials(__dirname + "/views/partials")

// 3. Rutas.

app.get("/", (req, res) => {
    res.render ("index")
})

app.get("/players", (req, res) => {
    res.render("players")
})

app.get("/teams", (req, res) => {
    res.render("teams")
})

// 4. Servidor

app. listen (process.env.PORT, () => {
    console.log(`Servidor activo en puerto ${process.env.PORT}`)
})