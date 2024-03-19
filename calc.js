function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return y !== 0 ? x / y : "Division by zero is not allowed";
}

console.log("Select operation.");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

while (true) {
	const choice = readline("Enter choice(1/2/3/4): ");

	if (choice === "1" || choice === "2" || choice === "3" || choice === "4") {
		try {
			const num1 = parseFloat(prompt("Enter first number: "));
			const num2 = parseFloat(prompt("Enter second number: "));

			if (choice === "1") {
				console.log(num1, "+", num2, "=", add(num1, num2));
			} else if (choice === "2") {
				console.log(num1, "-", num2, "=", subtract(num1, num2));
			} else if (choice === "3") {
				console.log(num1, "*", num2, "=", multiply(num1, num2));
			} else if (choice === "4") {
				console.log(num1, "/", num2, "=", divide(num1, num2));
			}

			if (prompt("Let's do next calculation? (yes/no): ").toLowerCase() !== "yes") {
				break;
			}
		} catch (error) {
			console.error("Invalid input, Please enter a number.");
		}
	} else {
		console.log("Invalid Input");
	}
}
