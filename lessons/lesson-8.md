# Lição 8: Terminar o Jogo

**Objetivo:** Quando um jogador ganha ou o jogo empata, precisamos de "desligar" o tabuleiro para que não se possam fazer mais jogadas.

---

### Código a Adicionar

Substitui o código que tinhas na tag `<script>` por este novo código. As novidades são a variável `gameActive` e as verificações que a usam.

```javascript
// Passo 8: Terminar o jogo quando houver um vencedor ou empate

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
// Esta é a nossa nova variável. É como um interruptor. Começa ligado (true).
let gameActive = true;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

cells.forEach(cell => {
    cell.addEventListener('click', function(event) {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        // A nossa verificação principal agora tem duas partes:
        // 1. A casa está preenchida? OU (||)
        // 2. O jogo NÃO (!) está ativo?
        // Se qualquer uma for verdade, não fazemos nada.
        if (boardState[clickedCellIndex] !== '' || !gameActive) {
            return;
        }

        // Se passarmos a verificação, o jogo continua normalmente.
        boardState[clickedCellIndex] = currentPlayer;
        clickedCell.textContent = currentPlayer;
        checkResult();
    });
});

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
        gameActive = false; // Desligamos o jogo!
        return;
    }

    if (!boardState.includes('')) {
        message.textContent = 'O jogo empatou!';
        gameActive = false; // Desligamos o jogo!
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `É a vez do jogador ${currentPlayer}`;
}

```

---

### Como Explicar às Crianças

1.  **`let gameActive = true;`**
    *   "Vamos criar um interruptor para o nosso jogo. Esta variável, `gameActive`, vai guardar `true` (verdadeiro) quando o jogo está a decorrer e `false` (falso) quando o jogo acaba."
    *   "Começamos com o interruptor ligado: `true`."

2.  **`if (boardState[clickedCellIndex] !== '' || !gameActive)`**
    *   "A nossa primeira verificação ficou mais poderosa. As duas barras `||` significam **OU**."
    *   "Agora lemos assim: 'Se a casa clicada **NÃO** está vazia **OU** se o jogo **NÃO** está ativo, então para tudo (`return`).'"
    *   "Isto impede que se jogue numa casa ocupada e também impede qualquer jogada se o jogo já tiver acabado."

3.  **`gameActive = false;`**
    *   "Olha o que acontece quando alguém ganha ou quando há um empate! A primeira coisa que fazemos, logo a seguir a mostrar a mensagem, é desligar o nosso interruptor."
    *   "Ao definirmos `gameActive = false`, a verificação que vimos no ponto 2 vai impedir qualquer clique futuro de fazer efeito."

O jogo agora funciona na perfeição! Só falta uma coisa: o botão para recomeçar. Vamos fazer isso na nossa última lição.
