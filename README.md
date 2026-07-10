# 🎬 Projeto Filmes e Paisagens

Aplicação desenvolvida em **React** para praticar os principais conceitos da biblioteca, simulando uma plataforma de vídeos com pesquisa, navegação por categorias e reprodução de vídeo.

No projeto, são usados recursos como componentização, roteamento com `react-router-dom`, busca dinâmica e exibição em carrossel.

---

## 🚀 Tecnologias utilizadas

* ⚛️ React
* 📦 Create React App / react-scripts
* 💻 JavaScript (ES6+)
* 🌐 HTML5
* 🎨 CSS3
* 🔁 `react-router-dom`
* 🎞️ `react-slick` para carrossel

---

## ✨ Funcionalidades

* 📺 Página inicial com cards de vídeos agrupados por categoria
* 🎞️ Carrossel horizontal para navegar pelos vídeos de cada categoria
* 🔍 Página de pesquisa com filtro em tempo real por título ou categoria
* ▶️ Página de reprodução de vídeo via rota dinâmica `/watch/:id`
* 404 customizado para rotas não encontradas
* 🧩 Componentização clara e reutilização de layout
* 📁 Dados de vídeo carregados localmente de `src/json/videos.json`

---

## 📚 Conceitos aplicados

* Componentes React
* JSX
* Props
* Estados (`useState`)
* Hooks
* Renderização de listas com `map()`
* Filtros e pesquisa dinâmica
* Roteamento com `react-router-dom`
* Organização de pastas por componentes e páginas

---

## ▶️ Como executar o projeto

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta
cd my-app

# Instale as dependências
npm install

# Execute o projeto
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

## 📁 Estrutura do projeto

```text
src/
 ├── components/
 │   ├── Banner/
 │   ├── Card/
 │   ├── Carousel/
 │   ├── Category/
 │   ├── Container/
 │   ├── Footer/
 │   ├── Header/
 │   ├── SearchVideoList/
 │   └── VideoList/
 ├── json/
 │   ├── db.json
 │   └── videos.json
 ├── pages/
 │   ├── Home/
 │   ├── Search/
 │   ├── Watch/
 │   └── PageNotFound/
 ├── App.js
 ├── index.js
 ├── index.css
 └── routes.js
```

---

## 🎯 Objetivo

Este projeto faz parte dos meus estudos em **React** e tem como objetivo praticar conceitos de front-end moderno por meio de uma aplicação interativa de vídeos.

A cada atualização, novas funcionalidades foram inseridas para melhorar a experiência: buscas, categorias, carrossel e navegação por rotas.

---

## 👨‍💻 Autor

**Matheus Rodrigues dos Santos**

Estudante de **Análise e Desenvolvimento de Sistemas**, focado em Desenvolvimento Front-End com React, JavaScript, HTML e CSS.
