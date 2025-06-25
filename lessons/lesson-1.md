# Lição 1: Fazer o Tabuleiro Responder aos Cliques

**Objetivo:** Fazer com que o computador nos "ouça" quando clicamos numa das casas do tabuleiro. Por enquanto, ele apenas mostrará uma mensagem secreta na consola do navegador.

---

## Código a Adicionar

Copia e cola este código dentro da tag `<script>` no teu ficheiro `index.html`:

```javascript
// Passo 1: Fazer o tabuleiro responder aos cliques

// Primeiro, precisamos de dizer ao computador para "ouvir" os cliques nas células.
const cells = document.querySelectorAll('.cell');

// Agora, para cada célula, dizemos o que fazer quando ela for clicada.
cells.forEach(cell => {
    cell.addEventListener('click', function() {
        // Quando uma célula for clicada, vamos mostrar uma mensagem na consola.
        console.log('Célula clicada!');
    });
});
```

---

### Como Explicar às Crianças

1. **`const cells = document.querySelectorAll('.cell');`**
   * "Primeiro, temos de avisar o computador quais são as 'casinhas' do nosso jogo. Esta linha de código encontra todas as casinhas que desenhámos com a classe `cell` e guarda-as numa caixinha chamada `cells`."

2. **`cells.forEach(cell => { ... });`**
   * "Agora, vamos dizer a cada uma dessas casinhas o que fazer. O `forEach` é como se fôssemos a cada casinha, uma por uma, e déssemos uma instrução."

3. **`cell.addEventListener('click', function() { ... });`**
   * "Aqui está a magia! `addEventListener` significa 'adicionar um ouvinte'. Estamos a dizer: 'Ó casinha, fica à escuta por um clique!'. E quando ouvires um clique, faz o que está dentro da `function` (função)."

4. **`console.log('Célula clicada!');`**
   * "Por enquanto, a única coisa que a função faz é escrever uma mensagem na 'consola' do navegador. A consola é uma área secreta dos programadores para ver mensagens do nosso código. Vamos ver como se abre!"

Depois de adicionar o código, mostra aos alunos como abrir a consola de programador do navegador (geralmente com a tecla F12) para que eles possam ver a mensagem "Célula clicada!" aparecer a cada clique.
