# ✂️ Jokenpô Interativo

Este projeto é uma implementação simples do clássico jogo de Pedra, Papel e Tesoura em JavaScript, com interface web e acompanhamento de placar em tempo real.

## 🎮 Como funciona

O jogador escolhe uma das três opções:
- Pedra
- Papel
- Tesoura

O computador escolhe aleatoriamente uma opção e o resultado é exibido imediatamente na tela. O placar é atualizado após cada rodada.

## 🏆 Regras

- Pedra vence Tesoura
- Papel vence Pedra
- Tesoura vence Papel
- Em caso de escolha igual, o resultado é empate

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript

## 📁 Estrutura do projeto

- `index.html` — estrutura da interface
- `style.css` — estilos visuais
- `script.js` — lógica do jogo
- `pedra.png`, `papel.png`, `tesoura.png` — imagens das opções

## ▶️ Como executar

No diretório do projeto, execute:

```bash
python3 -m http.server 8000
```

Em seguida, abra no navegador:

```text
http://localhost:8000
```

> Essa abordagem garante que os arquivos de imagem e a página sejam carregados corretamente.

## 📌 Observação

O app foi desenvolvido como uma prática de JavaScript com manipulação do DOM e eventos de clique, sem uso de frameworks ou bibliotecas externas.