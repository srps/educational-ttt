# Lição 3: Alternar entre Jogadores 'X' e 'O'

**Objetivo:** Introduzir o segundo jogador. O jogo vai alternar entre 'X' e 'O' a cada clique e também vai atualizar a mensagem para mostrar quem é o próximo a jogar.

---

## Código a Adicionar

Substitui o código que tinhas na tag `<script>` por este novo código:

```javascript
// Passo 3: Alternar entre jogadores 'X' e 'O'

const cells = document.querySelectorAll('.cell');
// Também precisamos de uma referência para o elemento da mensagem.
const message = document.getElementById('message');

// Vamos criar uma variável para saber quem é o jogador atual.
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', function(event) {
        const clickedCell = event.target;

        // Colocamos o símbolo do jogador atual na célula.
        clickedCell.textContent = currentPlayer;

        // Agora, trocamos o jogador.
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }

        // E atualizamos a mensagem para mostrar de quem é a vez.
        message.textContent = `É a vez do jogador ${currentPlayer}`;
    });
});
```

---

### Como Explicar às Crianças

1. **`let currentPlayer = 'X';`**
    * "Precisamos que o computador se lembre de quem é a vez de jogar. Criamos uma 'caixinha' chamada `currentPlayer` e guardamos a letra 'X' lá dentro para começar."
    * "Usamos `let` em vez de `const` porque o valor desta caixinha vai *mudar* durante o jogo."

2. **`clickedCell.textContent = currentPlayer;`**
    * "Em vez de escrevermos sempre 'X', agora vamos escrever o que estiver guardado na nossa caixinha `currentPlayer`. Na primeira vez, será 'X'."

3. **`if (currentPlayer === 'X') { ... } else { ... }`**
    * "Isto é uma condição `if/else`, que significa 'se/senão'. É como uma encruzilhada no nosso código."
    * "Estamos a dizer: **Se** (`if`) o jogador atual (`currentPlayer`) for igual a 'X', então muda o `currentPlayer` para 'O'."
    * "**Senão** (`else`), se não for 'X' (o que significa que só pode ser 'O'), então muda o `currentPlayer` de volta para 'X'."
    * "Isto faz com que a vez de jogar troque a cada clique!"

4. **`message.textContent = ...`**
    * "Finalmente, vamos atualizar a mensagem debaixo do tabuleiro. Vamos usar o `textContent` dela para dizer de quem é a próxima vez, usando o novo valor que guardámos em `currentPlayer`."

Depois de atualizar o código, os alunos verão que o jogo alterna entre 'X' e 'O'. Eles ainda podem clicar numa casa já preenchida, mas vamos resolver isso a seguir!
