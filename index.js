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
// un arreglo de objetos
    const players = [
		{
			name: "Rusell",
			lastName: "Westbrook",
			team: "OKC",
			photo: "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg",
			average: [
				{ year: 2013, points: 82 },
				{ year: 2014, points: 82 },
				{ year: 2015, points: 60 },
				{ year: 2016, points: 46 },
				{ year: 2017, points: 67 },
				{ year: 2018, points: 80 }
			]
		},
		{
			name: "Kevin",
			lastName: "Durant",
			team: "GSW",
			photo: "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
			average: [
			  { year: 2013, points: 76 },
			  { year: 2014, points: 80 },
			  { year: 2015, points: 65 },
			  { year: 2016, points: 50 },
			  { year: 2017, points: 67 },
			  { year: 2018, points: 78 }
			]
		},
	]
    
// el segundo argumento es un objeto
    res.render("players", {
        data: players
    })
})

app.get("/teams", (req, res) => {
    res.render("teams")
})

// 4. Servidor

app. listen (process.env.PORT, () => {
    console.log(`Servidor activo en puerto ${process.env.PORT}`)
})