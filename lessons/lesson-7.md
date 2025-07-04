# Lição 7: Verificar se Há Empate

**Objetivo:** Se todas as casas estiverem preenchidas e ninguém tiver ganhado, o jogo é um empate. Vamos adicionar a lógica para verificar esta condição.

---

## Código a Adicionar


Abre o ficheiro `lesson.js` e substitui o seu conteúdo por este código. A mudança é pequena e está na função `checkResult`.

```javascript
// Passo 7: Verificar se há empate

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

cells.forEach(cell => {
    cell.addEventListener('click', function(event) {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (boardState[clickedCellIndex] === '') {
            boardState[clickedCellIndex] = currentPlayer;
            clickedCell.textContent = currentPlayer;
            checkResult();
        }
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
        return;
    }

    // *** A NOSSA NOVA VERIFICAÇÃO ESTÁ AQUI ***
    // O jogo empatou? Verificamos se a nossa memória (boardState) NÃO (!) inclui casas vazias ('').
    if (!boardState.includes('')) {
        message.textContent = 'O jogo empatou!';
        return;
    }

    // Se o jogo não acabou, passamos a vez ao próximo jogador.
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `É a vez do jogador ${currentPlayer}`;
}
```

---

### Como Explicar às Crianças

1. **`if (!boardState.includes('')) { ... }`**
    * "Temos uma nova verificação, logo a seguir à de vitória. Esta é para o empate."
    * "`boardState.includes('')` pergunta ao computador: 'A tua lista de memória ainda inclui alguma casa vazia (`''`)?' Isto devolve `true` (verdadeiro) ou `false` (falso)."
    * "O ponto de exclamação `!` no início é um 'NÃO'. Ele inverte a resposta!"
    * "Então, estamos a perguntar: 'É verdade que a tua memória **NÃO** inclui nenhuma casa vazia?'"
    * "Se for verdade (ou seja, se todas as casas estiverem cheias) e se a verificação de vitória anterior não encontrou um vencedor, então só pode ser um empate! Mostramos a mensagem de empate e paramos a função com `return`."

Agora o jogo está quase completo! Os alunos podem jogar até ganhar, perder ou empatar. Mas há um problema: o jogo não para quando acaba, e não conseguimos recomeçar. Vamos resolver isso nas próximas lições.
