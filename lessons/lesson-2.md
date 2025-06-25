# Lição 2: Desenhar o 'X'

**Objetivo:** Quando clicarmos numa casa vazia, vamos desenhar um 'X' nela. Por agora, só nos vamos preocupar em desenhar o 'X'.

---

### Código a Adicionar

Substitui o código que tinhas na tag `<script>` por este novo código:

```javascript
// Passo 2: Desenhar o 'X' na célula clicada

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        // "event.target" é a célula específica que foi clicada.
        const clickedCell = event.target;

        // Adicionamos o 'X' ao conteúdo da célula.
        clickedCell.textContent = 'X';
    });
});
```

---

### Como Explicar às Crianças

1.  **`const clickedCell = event.target;`**
    *   "Lembram-se que dissemos ao computador para 'ouvir' os cliques? Quando um clique acontece, o computador nos dá um 'evento'. Dentro desse evento, o `event.target` diz-nos exatamente *qual* a casinha que foi clicada. Estamos a guardar essa casinha na caixa `clickedCell`."

2.  **`clickedCell.textContent = 'X';`**
    *   "Agora que sabemos qual a casinha que foi clicada, podemos mudar o seu conteúdo. `textContent` é o texto que está dentro da casinha. Estamos a dizer: 'O texto desta casinha agora é 'X'!'"

Depois de adicionar o código, os alunos poderão clicar em qualquer casa e ver um 'X' a aparecer. Eles vão notar que podem substituir os 'X's uns dos outros. Vamos corrigir isso na próxima lição!
