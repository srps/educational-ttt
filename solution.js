// Variáveis do Jogo
const board = document.getElementById('board');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
const cells = document.querySelectorAll('.cell');
const title = document.querySelector('h1'); // Precisamos do título para o Easter Egg

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let rainbowMode = false; // Variável para o nosso Easter Egg

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

// --- FUNÇÕES DO JOGO ---

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (boardState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    boardState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Easter Egg: Se o modo arco-íris estiver ativo, muda a cor!
    if (rainbowMode) {
        clickedCell.style.color = getRandomColor();
    }

    checkResult();
}

function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = boardState[winCondition[0]];
        let b = boardState[winCondition[1]];
        let c = boardState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.textContent = `O jogador ${currentPlayer} venceu!`;
        gameActive = false;
        return;
    }

    if (!boardState.includes('')) {
        message.textContent = 'O jogo empatou!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `É a vez do jogador ${currentPlayer}`;
}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    message.textContent = `É a vez do jogador ${currentPlayer}`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.color = '#333'; // Repõe a cor original
    });
}

// --- FUNÇÕES DO EASTER EGG ---

function activateRainbowMode() {
    rainbowMode = !rainbowMode; // Inverte o valor (true -> false, false -> true)
    if (rainbowMode) {
        title.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
        title.style.color = 'white';
        title.textContent = 'Jogo do Galo: MODO ARCO-ÍRIS!';
    } else {
        title.style.background = 'none';
        title.style.color = '#333';
        title.textContent = 'Jogo do Galo Educativo';
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// --- ADICIONANDO OS "OUVINTES" DE EVENTOS ---

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
title.addEventListener('click', activateRainbowMode); // Ouvinte para o Easter Egg!