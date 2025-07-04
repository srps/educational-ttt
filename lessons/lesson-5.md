# Lição 5: O Computador Precisa de "Memória" (Estado do Jogo)

**Objetivo:** Introduzir a ideia de que o computador precisa de se "lembrar" do estado do jogo numa estrutura de dados. Vamos criar uma *lista* (em programação, chamada de *array*) para guardar o que está em cada uma das 9 casas do tabuleiro.

---

## Código a Adicionar


Abre o ficheiro `lesson.js` e substitui o seu conteúdo por este código:

```javascript
// Passo 5: Dar uma "memória" ao computador

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';

// Esta é a "memória" do nosso jogo. É uma lista com 9 posições, uma para cada casa.
// Começa vazia, com strings vazias ''.
let boardState = ['', '', '', '', '', '', '', '', ''];

cells.forEach(cell => {
    cell.addEventListener('click', function(event) {
        const clickedCell = event.target;
        // Cada célula tem um 'data-index'. Vamos buscar esse número.
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

        // Agora, em vez de olharmos para o texto, olhamos para a nossa "memória".
        if (boardState[clickedCellIndex] === '') {
            // Se a posição na nossa memória estiver vazia, podemos jogar.

            // 1. Atualizamos a memória
            boardState[clickedCellIndex] = currentPlayer;

            // 2. Atualizamos a aparência da célula
            clickedCell.textContent = currentPlayer;

            // 3. Trocamos o jogador
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }

            // 4. Atualizamos a mensagem
            message.textContent = `É a vez do jogador ${currentPlayer}`;
        }
    });
});
```

---

### Como Explicar às Crianças

1. **`let boardState = ['', '', ...];`**
    * "O nosso computador tem uma memória fraca. Ele só vê o que está no ecrã. Para ele poder tomar decisões (como saber quem ganhou), ele precisa de uma memória interna. Vamos criar uma para ele!"
    * "Isto é um **array**. Podes pensar nele como uma lista ou um bloco de notas com 9 linhas. Cada linha representa uma casa do nosso tabuleiro. Começamos com todas as linhas em branco (`''`)."

2. **`const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));`**
    * "No nosso HTML, cada casa tem um número de `data-index` (de 0 a 8). Com esta linha, estamos a perguntar: 'Qual é o número de índice desta casa que foi clicada?' e a guardá-lo."
    * "`parseInt` apenas garante que o número que recebemos é mesmo um número e não texto."

3. **`if (boardState[clickedCellIndex] === '')`**
    * "A nossa verificação mudou! Agora é mais inteligente. Em vez de olharmos para o que está escrito na casa, estamos a olhar para a nossa memória!"
    * "Estamos a dizer: 'Vai à nossa lista `boardState`, na posição `clickedCellIndex`, e vê se está vazia (`''`).' Se estiver, então podemos jogar."

4. **`boardState[clickedCellIndex] = currentPlayer;`**
    * "Esta é a parte mais importante! Agora, quando um jogador joga, nós primeiro **atualizamos a nossa memória**. Estamos a dizer: 'Na posição desta casa, escreve o símbolo do jogador atual (`X` ou `O`)'."

Agora o nosso jogo tem um "cérebro"! Ele não parece diferente para o jogador, mas esta memória interna é o que nos vai permitir, na próxima lição, verificar se alguém ganhou o jogo.

Pronto para a Lição 6?
