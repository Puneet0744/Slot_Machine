🎰 Slot Machine Game (Node.js)
A simple terminal-based slot machine game built using JavaScript (Node.js). The game runs entirely in the command line, allowing the user to deposit money, place bets on multiple lines, and spin for winnings.

🚀 Features
Deposit money into your balance

Choose the number of lines to bet on (1–3)

Place a bet per line (limited by your balance)

Spin the slot machine with randomly generated symbols

Check if you win based on aligned symbols

Collect winnings and update your balance

Replay until balance runs out

📌 Rules
Four symbols: A, B, C, D

Each has a different frequency and payout value.

Symbols distribution:

A → appears 2 times (high value)

B → appears 4 times

C → appears 6 times

D → appears 8 times (most common, low value)

Symbol values (per line, per bet):

A → 5x

B → 4x

C → 3x

D → 2x

Winning condition:

A line is a win when all 3 symbols in that line are the same.

Winnings = bet amount × symbol value.

🛠 Installation & Usage
1. Clone the repository
bash
git clone https://github.com/your-username/slot-machine.git
cd slot-machine
2. Install dependencies
This project uses prompt-sync to handle user input.

bash
npm install prompt-sync
3. Run the game
bash
node index.js
🎮 How to Play
Enter your deposit amount.

Enter how many lines (1–3) you want to bet on.

Enter bet per line (must be within your balance).

Watch the slot machine spin!

Collect your winnings (if any).

Play again until you run out of money or quit manually.

📷 Example Gameplay
text
Enter a deposit amount: 50
Your Balance: $50
Enter the number of Lines you want to bet on (1-3): 3
Enter the amount you want to bet per line: 5

C | B | D
A | A | A
D | C | B

You won, $25
Your Balance: $60
🔧 Technologies Used
JavaScript (Node.js)

prompt-sync for handling user input

📜 License

This project is free to use for educational and personal purposes.
