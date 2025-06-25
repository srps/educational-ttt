# Lição 9: Recomeçar o Jogo

**Objetivo:** Fazer o botão "Recomeçar Jogo" funcionar. Ele terá de limpar o tabuleiro, a "memória" do computador e reiniciar todas as variáveis para podermos jogar outra vez.

---

## Código a Adicionar

Esta é a versão final! Substitui todo o código na tag `<script>` por este.

```javascript
// Passo 9: Fazer o botão de recomeçar funcionar!

// Vamos buscar todos os elementos de que precisamos do HTML
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset'); // O nosso novo botão!

// As nossas variáveis de estado do jogo
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

// --- FUNÇÕES (AS NOSSAS RECEITAS) ---

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (boardState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    boardState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
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

// Esta é a nossa nova função para recomeçar o jogo
function resetGame() {
    // 1. Repomos as variáveis ao seu estado inicial
    boardState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';

    // 2. Repomos a mensagem inicial
    message.textContent = `É a vez do jogador ${currentPlayer}`;

    // 3. Limpamos o texto de todas as células, uma por uma
    cells.forEach(cell => cell.textContent = '');
}


// --- ADICIONAR OS "OUVINTES" DE EVENTOS ---

// Adicionamos o ouvinte de clique para cada célula, que chama a função handleCellClick
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Adicionamos o ouvinte de clique para o botão, que chama a função resetGame
resetButton.addEventListener('click', resetGame);

```

---

### Como Explicar às Crianças

1. **Código Reorganizado**
    * "Reparem que eu organizei o código. Movi as funções `handleCellClick` e `checkResult` para cima. Agora temos uma secção só para as nossas 'receitas' (funções) e outra em baixo só para ligar os botões."

2. **`const resetButton = ...`**
    * "Tal como fizemos para as células e para a mensagem, primeiro temos de dizer ao computador onde está o botão de recomeçar."

3. **`function resetGame() { ... }`**
    * "Criámos uma nova receita, `resetGame`. O trabalho dela é pôr tudo como estava no início."
    * "Dentro dela, pegamos na nossa memória `boardState` e limpamo-la. Ligamos o interruptor `gameActive` outra vez. Dizemos que o `currentPlayer` é o 'X' de novo."
    * "Também mudamos a mensagem de volta para a original e, finalmente, usamos o `forEach` para ir a cada célula e limpar o que lá estava escrito."

4. **`resetButton.addEventListener('click', resetGame);`**
    * "Esta é a linha final! Estamos a dizer: 'Ó botão de recomeçar, fica à escuta por um clique. Quando fores clicado, executa a receita `resetGame`.'"

E pronto! O jogo está completo. Os alunos podem jogar, ver quem ganha, empatar e recomeçar o jogo as vezes que quiserem. Parabéns, acabaram de criar um jogo completo a partir do zero!
