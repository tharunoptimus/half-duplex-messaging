import fetch from "node-fetch"
import { askQuestion, readlineInterface } from "./askQuestion.js"

let serverName = ""

async function start() {
	serverName = await askQuestion(
		readlineInterface,
		"Enter the URL of the server: "
	)
	let response = await fetch(serverName)
	console.log(await response.text())

	console.log("Enter Message as Client. Send 'quit' to end Session.")
	main(serverName)
	return
}

async function main(serverName) {
	let message = await askQuestion(readlineInterface, "Client: ")
	if (message == "quit") {
		return
	}
	let request = await fetch(serverName, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			message: message,
		}),
	})

	let response = await request.text()
	console.log(`Server: ${response}`)
	main(serverName)
}

start()