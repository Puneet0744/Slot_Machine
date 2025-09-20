// 1. deposit some money
// 2. determine the number of lines the user wants to bet on
// 3. collect the bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again


const prompt = require("prompt-sync")();

// Defining global variables
const ROWS = 3;
const COLS = 3;

// Defining a object
const SYMBOLS_COUNT = {
    A: 2, // key -> value pair
    B: 4,
    C: 6,
    D: 8
}
const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2 
}

// Creating a deposit function
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ") // Take user input form the user
        const numberDepositAmount = parseFloat(depositAmount); // Convert string amount to a float value

        // Is deposit amount is not a number it prompt the user to try again
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, Try Again.")
        }
        else {
            return numberDepositAmount;
        }
    }
};

// creating the function that thatkes the number lines the user want to bet on
const getNumberofLines = () => {
    while(true) {
        const numberofLines = prompt("Enter the number of Lines you want to bet on (1-3): ");
        const numofLines = parseInt(numberofLines);

        if(isNaN(numofLines) || numofLines > 3 || numofLines < 1){
            console.log("Invalid number of Lines, Try Again.")
        } else{
            return numofLines;
        }
    }
};

const getBet = (balance, lines) => {
    while(true) {
        const betAmount = prompt("Enter the amount you want to bet per line: ");
        const numBetAmount = parseFloat(betAmount);

        if(isNaN(numBetAmount) || numBetAmount <= 0 || numBetAmount > balance / lines){
            console.log("Invalid bet amount, Try Again.");
        } else {
            return numBetAmount;
        }
    }
};

// Slot machine that generates random symbols based
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i=0; i < count; i++){
            symbols.push(symbol); // pushing / insert the symbol in the symblos array
        }
    }

    const reels = []; // Array inside an array (nested arrays)
    for (let i=0; i < COLS; i++){
        reels.push([]);
        const reelSymblos = [...symbols];
        for (let j=0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymblos.length) // Selecting a random index
            const selectedSymbol = reelSymblos[randomIndex]; // Saving the element present at that random index
            reels[i].push(selectedSymbol);  // pusing the element we selected in the reels array
            reelSymblos.splice(randomIndex, 1); // removing the element we selcted so that we dont select it again
        }
    }
    return reels;
};

// Transposing the array
const transpose = (reels) => {
    const rows = [];
    for (let i=0; i<ROWS; i++){
        rows.push([]);
        for(let j=0; j<COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

// printing the slot machine or printing the array
const printRows = () => {
    for (const row of rows){
        let rowString = "";
        for(const [i, symbol] of row.entries()){
            rowString += symbol
            if(i != row.length - 1){
                rowString += " | "
            }
        }
        console.log(rowString)
    }
}

// check if the user won
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row=0; row<lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols){  // loop throug every one of the symblos
            if(symbol != symbols[0]){   // check if the symblos are all same
                allSame = false;        // if not then make the allsame variable false
                break;                  // break out of the for loop
            }
        }

        if(allSame) {                                       // if the user wins
            winnings += bet * SYMBOL_VALUES[symbols[0]];    // the winnings will be equal to the bet he placed * by the value of the symbol he placed the bet on
        }
    }
    return winnings;
}

// main game function
const game = () => {
    let balance = deposit(); // let allows us to adjust the value which the const function does not allow

    while (true) {
        console.log("Your Balance: $" + balance.toString());

        const lines = getNumberofLines();
        const bet = getBet(balance, lines);
            balance -= bet * numofLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, lines);
            balance += winnings;
        console.log("You won, $" + winnings.toString()); 
        
        if (balance <= 0){
            console.log("You ran out of money!");
            break;
        } else {
            const playAgain = prompt("Do you want to play again (y/n)? ");
            if(playAgain != "y" || playAgain != "Y"){
                break;
            }
        }
    }
}

