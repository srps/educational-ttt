# Lição 6: Verificar se Alguém Ganhou

**Objetivo:** A parte mais emocionante! Vamos ensinar o computador a verificar, depois de cada jogada, se o jogador atual venceu o jogo.

---

### Código a Adicionar

Substitui o código que tinhas na tag `<script>` por este novo código. Ele tem bastantes novidades!

```javascript
// Passo 6: Verificar se alguém ganhou

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];

// Esta é a lista de todas as combinações que dão a vitória.
// Cada combinação é uma lista de 3 números, que são os índices das casas.
const winningConditions = [
    [0, 1, 2], // Linha de cima
    [3, 4, 5], // Linha do meio
    [6, 7, 8], // Linha de baixo
    [0, 3, 6], // Coluna da esquerda
    [1, 4, 7], // Coluna do meio
    [2, 5, 8], // Coluna da direita
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundária
];

cells.forEach(cell => {
    cell.addEventListener('click', function(event) {
        const clickedCell = event.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        if (boardState[clickedCellIndex] === '') {
            boardState[clickedCellIndex] = currentPlayer;
            clickedCell.textContent = currentPlayer;

            // Depois de cada jogada, vamos verificar o resultado!
            checkResult();
        }
    });
});

// Esta é uma nova função, uma receita para verificar o resultado.
function checkResult() {
    let roundWon = false;
    // Usamos um ciclo "for" para verificar cada condição de vitória, uma por uma.
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i]; // A condição atual que estamos a ver
        // Ex: na primeira vez, winCondition será [0, 1, 2]

        let a = boardState[winCondition[0]];
        let b = boardState[winCondition[1]];
        let c = boardState[winCondition[2]];

        // Se alguma das casas estiver vazia, não pode haver vitória nesta combinação.
        if (a === '' || b === '' || c === '') {
            continue; // Passa para a próxima verificação
        }

        // Se todas as casas tiverem o mesmo símbolo, alguém ganhou!
        if (a === b && b === c) {
            roundWon = true;
            break; // Para o ciclo, já encontrámos um vencedor
        }
    }

    if (roundWon) {
        message.textContent = `O jogador ${currentPlayer} venceu!`;
        return; // Acaba a função aqui
    }

    // Se ninguém ganhou, passamos a vez ao próximo jogador.
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `É a vez do jogador ${currentPlayer}`;
}
```

---

### Como Explicar às Crianças

1.  **`const winningConditions = [ ... ];`**
    *   "Como é que nós sabemos que alguém ganhou? Porque fez 3 em linha, certo? O computador não sabe o que é uma linha. Então, temos de lhe ensinar!"
    *   "Esta é uma lista de listas! Cada lista pequena `[0, 1, 2]` é uma combinação de 3 casas que dá a vitória. Escrevemos todas as 8 maneiras de ganhar."

2.  **`function checkResult() { ... }`**
    *   "Para manter o nosso código organizado, criámos uma **função**. Pensa numa função como uma receita. Esta receita chama-se `checkResult` e serve para verificar quem ganhou. Chamamos a receita (`checkResult();`) depois de cada jogada."

3.  **`for (let i = 0; i < winningConditions.length; i++) { ... }`**
    *   "Isto é um **ciclo `for`**. É uma forma de dizer ao computador para repetir uma tarefa várias vezes. Estamos a dizer: 'Verifica cada uma das 8 condições de vitória, uma de cada vez'."

4.  **`let a = boardState[...]`**
    *   "Dentro do ciclo, para cada condição de vitória (ex: `[0, 1, 2]`), vamos buscar o que está na nossa memória (`boardState`) para cada uma das três casas. Guardamos em `a`, `b`, e `c` para ser mais fácil de ler."

5.  **`if (a === b && b === c) { ... }`**
    *   "Esta é a verificação mágica! Estamos a perguntar: 'O conteúdo da casa `a` é igual ao da `b` E o da `b` é igual ao da `c`?' Se for verdade, e se não estiverem vazias, encontrámos um vencedor!"

6.  **`if (roundWon) { ... }`**
    *   "No final, se a nossa variável `roundWon` for verdadeira, mostramos a mensagem de vitória! Senão, passamos a vez ao outro jogador como fazíamos antes."

Agora o jogo já tem um vencedor! Peça aos alunos para tentarem ganhar. O que falta? Tratar dos empates e recomeçar o jogo.
