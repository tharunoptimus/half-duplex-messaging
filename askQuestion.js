import readline from "readline"
export const readlineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

export function askQuestion(readlineInterface, question) {
	return new Promise((resolve) => {
		readlineInterface.question(question, (answer) => {
			resolve(answer)
		})
	})
}