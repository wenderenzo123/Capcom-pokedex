# Tutorial: Criando um Projeto React com Tailwind CSS e TypeScript

Neste tutorial, você aprenderá como criar um projeto React com a ajuda do Tailwind CSS para estilos e TypeScript para maior segurança de tipo. Vamos dividir o processo em etapas fáceis de seguir.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

## Etapa 1: Criar um novo projeto React

Abra o terminal e execute os seguintes comandos para criar um novo projeto React com TypeScript:

```bash
npx create-react-app epc-lp --template typescript
```

Isso criará um novo projeto React com suporte a TypeScript.

## Etapa 2: Instalar o Tailwind CSS

Dentro do diretório do seu projeto, instale o Tailwind CSS e as ferramentas relacionadas executando os seguintes comandos:

```bash
cd epc-lp
```
```bash
npm install -D tailwindcss postcss autoprefixer 
```

## Etapa 3: Configurar o Tailwind CSS

Crie um arquivo de configuração para o Tailwind CSS executando o seguinte comando:

```bash
npx tailwindcss init -p
```

Isso criará um arquivo `tailwind.config.js` na raiz do seu projeto.

## Etapa 4: Configurar o PostCSS

Crie um arquivo `postcss.config.js` na raiz do projeto e adicione o seguinte conteúdo:

```javascript
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};
```
### index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Etapa 5: Criar estilos com Tailwind CSS

Agora que o Tailwind CSS está configurado, você pode começar a usar suas classes de estilo em seus componentes React. Você pode adicionar estilos diretamente em seus arquivos JSX ou em um arquivo CSS separado.

Por exemplo, você pode adicionar classes diretamente a um elemento JSX:

```jsx
import React from 'react';

function MeuComponente() {
  return (
    <div className="bg-blue-500 text-white p-4">
      Este é um componente com estilos do Tailwind CSS.
    </div>
  );
}

export default MeuComponente;