import express from "express"
const app = express()
const port = process.env.PORT || 3003

import { askQuestion, readlineInterface } from "./askQuestion.js"
import { serverMessage, connectionSuccessMessage } from "./serverMessage.js"

app.listen(port, () => {
	console.log("Server Running on port", port)
})

console.log(serverMessage)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
	res.status(200).send(connectionSuccessMessage)
})

app.post("/", async (req, res) => {
	console.log(`Client: ${req.body.message}`)
	let message = await askQuestion(readlineInterface, "Server: ")
	res.status(200).send(message)
})