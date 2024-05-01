1. iniciar con npm init -y
2. buscar dependencias he instalar: 
	- express
	- morgan
	- nodemon
3. creación de carpeta src
4. creaación de index.js en carpeta src
5. modificación de package.json, agregando el "type": "module"
6. creación de servidor en archivo index.js:
	- import express
	- const app = express()
	- app.use(express.json())
	- app.listen(3000)
	console.log("nombre servidor", 3000)
7. 	creación de carpeta ruta en src, con el archivo "nombre.router.js"
8. creación de ruta con lo siguiente:
    - importar {Router} from "express";
	- const router = Router()
	- router.get("/seguimiento", (req, res) => res.send("seguimiento")
	- export default router
9. importar carpeta ruta a index.js
	- import chilexpressRouter from "./routers/chilexpress.router.js"
	- crear app.use("/chilexpress", chilexpressRouter)
10. importar en index.js:

	- import morgan from "morgan":
	- crear app.use(morgan("dev"))
11. correr servidor con "npm run dev"
12. modificación de archivo chilexpress.router.js, con los datos de javascript
 de chilexpress, el cual sacas de chilexpress developers, en la sección de api envios
 
	- router.get("/seguimiento", async (req, res) => {
    
    // Request body
    const body = {
        "reference": "27699451457",
        "transportOrderNumber": 99726299584,
        "rut": 77398220,
        "showTrackingEvents": 1
    };
    
    fetch('https://testservices.wschilexpress.com/transport-orders/api/v1.0/tracking', {
            method: 'POST',
            body: JSON.stringify(body),
            // Request headers
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': 'ESTE ES TU CODIGO DE PRUEBA"
        })
        .then(response => response.json())
      .then(data => console.log(data));
    });
	
	export default router
	
13. luego de agregar tu key de chilexpress, vas a la pagina y pruebas el endpoint:
	- localhost:3000/chilexpress/seguimiento
14. revisas tu terminal y contaras con la información de retorno del servidor.

EXITO!

	