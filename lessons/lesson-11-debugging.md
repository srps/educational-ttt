# Lição Especial 11: Caça ao Bug!

**Objetivo:** Aprender uma das tarefas mais importantes de um programador: encontrar e corrigir um *bug* (um erro) no código. Temos uma versão do nosso jogo que não está a funcionar bem. Vamos ser detetives!

---

### O Desafio

Abram o ficheiro `index-bug.html` no navegador. Joguem o jogo. Tentem ganhar com o jogador 'X'. O que é que acontece? E se o jogador 'O' ganhar?

**O Bug:** Não importa quem ganha, a mensagem diz sempre que o jogador 'O' venceu! Isto não é justo. A nossa missão é encontrar o erro no código e corrigi-lo.

---

### Pistas para Encontrar o Bug

1.  **Onde é que o problema acontece?** O problema está na mensagem de vitória. Por isso, o nosso bug deve estar na parte do código que mostra essa mensagem.

2.  **Qual a função responsável?** A nossa função `checkResult` é a que verifica se alguém ganhou e mostra a mensagem. O erro tem de estar lá dentro.

3.  **Vamos ler o código com atenção.** Procurem dentro da `checkResult` pela linha que escreve a mensagem de vitória. A linha é esta:

    ```javascript
    if (roundWon) {
        // CUIDADO! HÁ UM BUG NESTA LINHA!
        message.textContent = `O jogador O venceu!`; // Ups...
        gameActive = false;
        return;
    }
    ```

### A Solução

Conseguem ver o problema? A mensagem está "escrita em pedra" para dizer sempre `'O'`. Ela não está a usar a nossa variável `currentPlayer` para dizer quem realmente ganhou!

Para corrigir o bug, temos de mudar aquela linha para que ela use a variável, tal como fazíamos antes. A correção é esta:

**Código com Bug:**
```javascript
message.textContent = `O jogador O venceu!`;
```

**Código Corrigido:**
```javascript
message.textContent = `O jogador ${currentPlayer} venceu!`;
```

Façam esta pequena alteração no ficheiro `index-bug.html`, guardem, e testem outra vez. Agora, quando o 'X' ganhar, a mensagem deverá estar correta!

---

### O que Aprendemos

- **Bugs são normais:** Todos os programadores criam bugs. O importante é saber como encontrá-los.
- **Ler o código é fundamental:** A melhor forma de encontrar um bug é ler o código com atenção e pensar passo a passo no que ele está a fazer.
- **Variáveis são poderosas:** Este bug aconteceu porque alguém se esqueceu de usar uma variável. Usar variáveis torna o nosso código flexível e menos propenso a erros como este.

Parabéns, agora não são apenas programadores, são também caçadores de bugs!
