let currentPlayer = 'X';
let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let gameActive = true;

function cellClicked(row, col) {
    if (gameBoard[row][col] === '' && gameActive) {
        gameBoard[row][col] = currentPlayer;
        document.getElementById(`bigbox`).rows[row].cells[col].innerText = currentPlayer;

        if (checkWin() || checkDraw()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `It's ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] === currentPlayer && gameBoard[i][1] === currentPlayer && gameBoard[i][2] === currentPlayer) {
            return true; 
        }
        if (gameBoard[0][i] === currentPlayer && gameBoard[1][i] === currentPlayer && gameBoard[2][i] === currentPlayer) {
            return true; 
        }
    }
    if (gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) {
        return true; 
    }
    if (gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer) {
        return true;
    }
    return false;
}
function checkDraw() {
    for (let row of gameBoard) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    document.getElementById('message').innerText = "It's a draw!";
    return true;
}

function resetGame() {
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.getElementById('bigbox').querySelectorAll('td').forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('message').innerText = `It's ${currentPlayer}'s turn`;
}

document.getElementById('message').innerText = `It's ${currentPlayer}'s turn`;
