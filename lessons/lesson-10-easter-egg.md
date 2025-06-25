# Lição Bónus 10: O Easter Egg do Arco-Íris

**Objetivo:** Adicionar uma surpresa escondida (um *Easter Egg*) no nosso jogo. Quando os jogadores clicarem no título, vamos ativar um "Modo Arco-Íris" onde cada jogada tem uma cor diferente!

---

## Código a Adicionar

Este código é um pouco diferente. Em vez de substituirmos tudo, vamos **adicionar** código novo ao que já temos da Lição 9. Terás de encontrar os sítios certos para adicionar cada parte.

**1. Adiciona estas novas variáveis no topo, junto às outras:**

```javascript
// ... (as outras variáveis)
const title = document.querySelector('h1'); // Precisamos do título para o Easter Egg
let rainbowMode = false; // Variável para o nosso Easter Egg. Começa desligado.
```

**2. Adiciona esta nova verificação dentro da função `handleCellClick`:**

```javascript
function handleCellClick(event) {
    // ... (código existente)

    boardState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // NOVO: Se o modo arco-íris estiver ativo, muda a cor!
    if (rainbowMode) {
        clickedCell.style.color = getRandomColor();
    }

    checkResult();
}
```

**3. Adiciona esta linha à função `resetGame` para repor as cores:**

```javascript
function resetGame() {
    // ... (código existente)

    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.color = '#333'; // NOVO: Repõe a cor original da letra
    });
}
```

**4. Adiciona estas duas novas funções no final, antes dos "Ouvintes de Eventos":**

```javascript
// --- FUNÇÕES DO EASTER EGG ---

function activateRainbowMode() {
    // Inverte o valor (true vira false, false vira true)
    rainbowMode = !rainbowMode;
    if (rainbowMode) {
        // Se ativou, muda o estilo do título
        title.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
        title.style.color = 'white';
        title.textContent = 'Jogo do Galo: MODO ARCO-ÍRIS!';
    } else {
        // Se desativou, volta ao normal
        title.style.background = 'none';
        title.style.color = '#333';
        title.textContent = 'Jogo do Galo Educativo';
    }
}

// Esta função cria uma cor aleatória em formato hexadecimal (ex: #F0A2C3)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
```

**5. Finalmente, adiciona este novo "ouvinte" no final do ficheiro:**

```javascript
// ... (os outros ouvintes)
title.addEventListener('click', activateRainbowMode); // Ouvinte para o Easter Egg!
```

---

### Como Explicar às Crianças

1. **`rainbowMode = false;`**
    * "Vamos criar um novo interruptor, tal como o `gameActive`. Este, chamado `rainbowMode`, controla se o nosso modo secreto está ligado ou desligado. Começa desligado (`false`)."

2. **`title.addEventListener(...)`**
    * "Agora vamos fazer uma coisa nova: vamos pôr o título do jogo à escuta por cliques! Quando alguém clicar no título, ele vai chamar a nossa nova função `activateRainbowMode`."

3. **`function activateRainbowMode()`**
    * "Esta função é a que liga e desliga o modo arco-íris. Ela usa um `if/else` para verificar se o modo está a ser ligado ou desligado e muda a aparência do título para nos mostrar em que modo estamos."

4. **`function getRandomColor()`**
    * "Esta é a função mais divertida! Ela constrói uma cor aleatória. `Math.random()` pede ao computador um número aleatório, e nós usamos isso para escolher 6 letras e números da lista `letters` para formar um código de cor como `#RRGGBB`."

5. **`if (rainbowMode) { ... }`**
    * "Dentro da função `handleCellClick`, onde pomos o 'X' ou 'O', adicionamos uma verificação: **Se** o `rainbowMode` estiver ativo, então chama a função `getRandomColor` e muda a cor da letra (`style.color`) da célula que acabámos de clicar."

Agora, quando os alunos clicarem no título, vão ativar o modo secreto e cada jogada será uma explosão de cores! Clicar novamente no título desativa o modo. É uma surpresa divertida que lhes ensina conceitos novos e poderosos.
