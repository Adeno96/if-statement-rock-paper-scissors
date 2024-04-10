//rock-paper-scissors game (if-statement practice)

userPlayer = "rock";
cpu = "scissors";

if (userPlayer === cpu) {
    console.log("Tie game!");
} else if (userPlayer === "rock") {
    if (cpu === "scissors") {
        console.log("userPlayer wins!");
    } else {
        console.log("cpu wins!");
    }
} else if (userPlayer === "paper") {
    if (cpu === "rock") {
        console.log("userPlayer wins!");
    } else {
        console.log("cpu wins");
    }
} else if (userPlayer === "scissors") {
    if (cpu === "paper") {
        console.log("userPlayer wins!");
    } else {
        console.log("cpu wins!");
    }
}