# Lição 4: Impedir Jogadas em Casas Ocupadas

**Objetivo:** Ensinar o computador a verificar se uma casa do tabuleiro já foi preenchida. Se já tiver um 'X' ou um 'O', a jogada será ignorada e não faremos nada.

---

## Código a Adicionar

Substitui o código que tinhas na tag `<script>` por este novo código:

```javascript
// Passo 4: Impedir jogadas em casas já preenchidas

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', function(event) {
        const clickedCell = event.target;

        // Primeiro, verificamos se a casa já está preenchida.
        if (clickedCell.textContent === '') {
            // Se estiver vazia, então podemos fazer a jogada.
            clickedCell.textContent = currentPlayer;

            // Trocamos o jogador.
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }

            // E atualizamos a mensagem.
            message.textContent = `É a vez do jogador ${currentPlayer}`;
        }
        // Se a casa não estiver vazia (o `if` for falso), o código simplesmente não faz nada!
    });
});
```

---

### Como Explicar às Crianças

1. **`if (clickedCell.textContent === '') { ... }`**
    * "Agora temos uma nova verificação! Antes de fazermos qualquer coisa, usamos um `if` para perguntar: 'O texto dentro da casinha clicada (`clickedCell.textContent`) é igual a nada (`''`)?'"
    * "As aspas simples `''` sem nada dentro representam um texto vazio. Por isso, estamos a verificar se a casa está vazia."
    * "Todo o nosso código antigo que desenha o 'X' ou 'O' e troca o jogador foi movido para *dentro* desta condição `if`."
    * "Isto significa que o código só vai ser executado **se** a casa estiver vazia. Se já tiver alguma coisa, o programa salta o bloco de código do `if` e não faz absolutamente nada. É como se o clique não tivesse acontecido."

Depois de atualizar o código, os alunos vão notar que já não conseguem clicar numa casa que já tem um 'X' ou um 'O'. O jogo está a ficar mais inteligente! A seguir, vamos dar uma memória ao nosso computador.
