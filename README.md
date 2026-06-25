<h1 align="center">🧭 Jornada Viagens</h1>

<p align="center">
  Landing page responsiva de uma agência de viagens fictícia, desenvolvida durante o módulo
  <strong>"HTML e CSS: responsividade em layouts"</strong> da formação Front-end da Alura.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge" alt="Status: em desenvolvimento">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
</p>

<p align="center">
  <a href="https://isla-ctrl.github.io/jornada-viagens/">🔗 Ver página publicada</a>
</p>

![Gif mostrando o site Jornada viagens, do cabeçalho até o rodapé](./img/jornada-viagens.gif)

---

## 🧩 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Status do projeto](#-status-do-projeto)
- [Funcionalidades](#️-funcionalidades)
- [Destaque: menu hambúrguer com JavaScript](#-destaque-menu-hambúrguer-com-javascript-próprio)
- [Conceitos e técnicas aplicadas](#-conceitos-e-técnicas-aplicadas)
- [Tecnologias](#️-tecnologias)
- [Estrutura de pastas](#️-estrutura-de-pastas)
- [Fluxo de trabalho com Git](#-fluxo-de-trabalho-com-git)
- [Como executar localmente](#-como-executar-localmente)
- [Próximos passos](#-próximos-passos)
- [O que eu aprendi](#-o-que-eu-aprendi)
- [Autora](#-autora)

---

## 📌 Sobre o projeto

**Jornada Viagens** é o site institucional fictício de uma agência de viagens, com identidade visual baseada em uma bússola. O projeto foi proposto pela Alura como prática de **responsividade em HTML e CSS**, e eu o desenvolvi do zero: estruturação semântica, estilização, responsividade para mobile/tablet/desktop e versionamento com Git, simulando o fluxo de trabalho de um ambiente profissional real.

A página inicial (Home) traz:

- Cabeçalho com navegação e menu hambúrguer no mobile
- Banner principal de boas-vindas
- Ofertas da semana (cards de destinos com preço)
- Busca por categoria (pacotes nacionais, internacionais, transfer e seguro viagem)
- Destinos populares (Tokyo e Osaka)
- Condições de pagamento
- Depoimentos de clientes
- Rodapé com horário de atendimento e redes sociais

---

## 🚧 Status do projeto

- [x] Página inicial (Home) 100% responsiva
- [x] Menu hambúrguer funcional, com lógica própria em JavaScript
- [x] SEO básico (meta description, Open Graph e favicon)
- [ ] Página de Blog
- [ ] Página de Pacotes de Viagem
- [ ] Página de Contato

> **Este projeto ainda está em desenvolvimento.** A Home foi construída durante as aulas. As páginas restantes fazem parte do desafio final do curso. Os layouts foram disponibilizados no Figma e serão implementados por mim, de forma independente, nas próximas etapas.

---

## ⚙️ Funcionalidades

- 🧭 Header com logo responsiva (troca a imagem conforme o dispositivo é mobile ou desktop)
- 🍔 Menu de navegação mobile com hambúrguer **funcional via JavaScript** (veja destaque abaixo)
- 🏖️ Seção "Ofertas da Semana" com cards de destinos (Japão, San Andreas, Paraíba e Manaus)
- 🔎 Seção "Busque por Categoria" com ícones (Pacotes Nacionais, Pacotes Internacionais, Transfer e Seguro Viagem)
- 🌍 Seção "Destinos Populares" com descrição de Tokyo e Osaka
- 💳 Seção "Condições de Pagamento", com galeria de imagens organizada em **CSS Grid**
- ⭐ Seção de depoimentos com avaliação por estrelas (caracteres Unicode)
- 📱 Layout 100% responsivo (mobile, tablet e desktop) com **Flexbox** e **Grid**
- 🔍 SEO on-page: meta description, Open Graph (título, descrição, imagem) e favicon personalizado

---

## 🍔 Destaque: menu hambúrguer com JavaScript próprio

No curso, a lógica de abrir/fechar o menu mobile foi ensinada usando apenas **HTML e CSS** (com `checkbox` e `:checked`). Como eu já tinha estudado **JavaScript antes de HTML e CSS**, decidi me desafiar e implementar essa interatividade com lógica própria em JS, adicionando o `addEventListener` no ícone do menu e controlando a exibição da navegação via manipulação de classes.

Foi uma forma de ir além do conteúdo proposto e aplicar, na prática, um conhecimento que eu já tinha de outra trilha de aprendizado.

---

## 🎯 Conceitos e técnicas aplicadas

Conceitos explorados ao longo do módulo e aplicados neste projeto:

- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Flexbox para alinhamento e distribuição de elementos
- CSS Grid para layouts em duas dimensões (ex.: galeria de imagens da seção de pagamento)
- Media queries para adaptar o layout a diferentes tamanhos de tela
- Componentização visual (cards reutilizáveis com classes consistentes)
- Boas práticas de SEO: meta description, Open Graph e favicon
- Organização e otimização de imagens para web
- Versionamento de código com Git (branches, commits e pull requests)

---

## 🛠️ Tecnologias

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub">
</p>

---

## 🗂️ Estrutura de pastas

```
jornada-viagens/
├── CSS/
│   └── style.css
├── fonts/
├── img/
├── js/
│   └── index.js        # lógica do menu hambúrguer
├── favico.png
└── index.html
```

---

## 🔄 Fluxo de trabalho com Git

Tratei este projeto como se estivesse em um ambiente de trabalho real:

- Commits feitos regularmente pelo terminal, com mensagens descritivas
- Criação de **branches** para organizar o desenvolvimento de funcionalidades
- Abertura de **pull requests** no GitHub antes de integrar o código
- **Merge** das branches após revisão, mantendo a branch `main` estável

---

## 🚀 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/Isla-ctrl/jornada-viagens.git

# Acesse a pasta do projeto
cd jornada-viagens

# Abra o index.html no navegador
# (ou use a extensão Live Server do VS Code para recarregamento automático)
```

---

## 📚 Próximos passos

- [ ] Construir as páginas de **Blog**, **Pacotes de Viagem** e **Contato**, a partir dos layouts em Figma do desafio final do curso
- [ ] Revisar pequenos ajustes de acessibilidade (ex.: navegação do menu 100% por teclado)
- [ ] Aplicar os aprendizados deste projeto em estudos futuros com **React**

---

## 🧠 O que eu aprendi

Este projeto foi minha primeira experiência aplicando responsividade "de verdade" — pensando em como cada seção se comporta em diferentes tamanhos de tela, e não só replicando um design fixo. Também foi a primeira vez que usei Git e GitHub de forma disciplinada, com branches e pull requests, em vez de apenas subir o código direto na `main`.

Implementar o menu hambúrguer com JavaScript próprio, sem isso ter sido pedido no curso, me mostrou que consigo conectar conhecimentos de trilhas diferentes (JS + HTML/CSS) para resolver um problema com mais autonomia — algo que quero continuar praticando enquanto avanço para React.

---

## 👩‍💻 Autora

**Isla**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Isla-ctrl)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/beatriz-souza-6a942b333/)

>

---

<p align="center"><i>Projeto fictício e sem fins comerciais, desenvolvido para fins educacionais (Alura).</i></p>
