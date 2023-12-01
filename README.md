# React e TailWindCSS

- Pedro Figueira
- Wender Enzo

### Pré-requisitos

Antes de começar, certifique-se de ter o Node e o npm instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

```bash
node -v
```

```bash
npm -v
```
<br/>
<br/>

## Parte 1: Criando um Projeto React com Tailwind CSS e TypeScript

Você aprenderá como criar um projeto React com a ajuda do Tailwind CSS para estilos e TypeScript para maior segurança de tipo.

## Etapa 1: Instalar o comando `create-react-app`

rode o comando:

```bash
npm list
```

para ver se o comando já está instalado. Se não estiver, instale-o com o seguinte comando:

```bash
npm install -g create-react-app
```

### Etapa 2: Criar um novo projeto React

Abra o terminal e execute os seguintes comandos para criar um novo projeto React com TypeScript:

```bash
npx create-react-app Hello-World --template typescript
```

Isso criará um novo projeto React com suporte a TypeScript.

### Etapa 3: Instalar o Tailwind CSS

Dentro do diretório do seu projeto, instale o Tailwind CSS e as ferramentas relacionadas executando os seguintes comandos:

```bash
cd hello-world
```
```bash
npm install -D tailwindcss postcss autoprefixer 
```

### Etapa 4: Configurar o Tailwind CSS

Crie um arquivo de configuração para o Tailwind CSS executando o seguinte comando:

```bash
npx tailwindcss init -p
```

Isso criará um arquivo `tailwind.config.js` na raiz do seu projeto.

### Etapa 5: Configurar o TailWindCSS

Crie um arquivo `tailwind.config.js` na raiz do projeto e adicione o seguinte conteúdo:

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
### Etapa 6: Configurar o `index.css`

Adicione o seguinte código ao arquivo css do seu projeto para que o tailwind possa funcionar de maneira esperada.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
<br/>
<br/>
<br/>
<br/>

## Parte 2: Adicionando estilos customizados na sua página

Você aprenderá a definir estilos padrões no seu site com a ajuda do arquivo de configuração do TailWind.

### Abra o arquivo de configuração do tailwind

Vá no arquivo `tailwind.config.js` e comece a definir seus estilos

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: false, //define se o conteúdo produzido pelo talwind deve ser marcado com '!important'
  important: '#app', //define como '!important', mas com o prefix de #app o que reduz problemas com inline css e bibliotecas
  theme: {
    colors: { //define cores personalizadas
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: { //define fontes personalizadas
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: { //extenda os tamanhos já existentes
      spacing: { //cria dois novos tamanhos
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: { //cria novo tamanho
        '4xl': '2rem',
      }
    }
  },
}
```
<br/>
<br/>
<br/>
<br/>

## Parte 3: Criando um componente

Os componentes permitem que você divida a interface do usuário em partes independentes e reutilizáveis e pense em cada parte isoladamente. Você aprenderá a criar o seu primeiro componente no seu app.

### Etapa 1: Criar uma pasta para os componentes

Em *src* crie uma pasta chamada *components*. E em sequência crie uma pasta com o nome do seu componente.

```files
v src
   v components
      > HelloWorld
...
```

### Etapa 2: Crie seu componente

A maneira mais simples de definir um componente é escrever uma função. Você criará um componente React e o exportará.

Comece criando um arquivo `index.tsx` dentro dessa pasta com o nome do seu componente.

```files
v src
   v components
      v HelloWorld
         > index.tsx   <------ aqui
```


```typescript
const HelloWorld = () => {
   return (
      <> <!-- equivalente a uma div vazia -->
         <p>Hello World!</p>
      </>
   );
};

export default HelloWorld;
```

### Etapa 3: Importe o seu componente

Agora você pode importar o seu componente no seu arquivo principal `App.tsx`

```typescript
import HelloWorld from "./components/HelloWorld";

function App() {


   return (
      <>
         <HelloWorld />
      </>
   );
}

export default App;
```
<br/>
<br/>
<br/>
<br/>

## Parte 4: Usando o TailwindCSS no seu projeto

Para se usar as classes do tailwind no seu projeto, basta adicionar a classe no elemento desejado.

```typescript
   <div className="bg-sky-900">
      <p className="text-white">Hello World!</p>
   </div>
```

Há também outras maneiras de se usar o tailwind, como por exemplo, usando o `@apply` no seu css.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
   .btn {
      @apply px-4 py-2 rounded-md text-base bg-indigo-500 hover:bg-indigo-600 text-white;
   }
}
```

Assim como com a criação de variaveis no css, você pode criar variaveis no tailwind.

```typescript
const sizes = {
  md: 'px-4 py-2 rounded-md text-base',
  lg: 'px-5 py-3 rounded-lg text-lg',
}

const colors = {
  indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white',
}

export default function Button({ color, size, children }) {
  let colorClasses = colors[color]
  let sizeClasses = sizes[size]

  return (
    <button type="button" className={`font-bold ${sizeClasses} ${colorClasses}`}>
      {children}
    </button>
  )
}
```
<br/>

### Por que usar TailWindCSS

O motivo do uso massivo biblioteca TailWindCSS é a sua facilidade de uso e a sua flexibilidade. Com o TailWindCSS você pode criar estilos que tomam linhas de código de CSS em palavras. 
<br/>
<br/>

*exemplo - gradient*
```typescript
<div className="bg-gradient-to-r from-indigo-500"></div> //coloque o mouse em cima para ver o que acontece
```
<br/>
<br/>
<br/>
<br/>

## Parte 5: Passando parametros para o seu componente

Uma importante característica dos componentes é que, assim como funções, eles aceitam valores de parâmetro. Isso permite que você faça que você faça componentes únicos, mas que possa ser configurado para exibir qualquer coisa que você desejar.

### Etapa 1: Criar os parametros do seu componente

Para criar os parametros que deseja basta criar um objeto com os parametros que deseja e passar como parametro para o seu componente no arquivo `App.tsx`

```typescript
import HelloWorld from "./components/HelloWorld";

function App() {

   const params = {
      text: "Hello World!",
      color: "bg-sky-900",
      textColor: "text-white"
   }

   return (
      <>
         <HelloWorld params={params} />
      </>
   );
}
```

### Etapa 2: Usar os parametros no seu componente

Para usar os parametros no seu componente basta usar a propriedade `props` e acessar o parametro desejado. Esse processo é chamado de destructuring e é muito usado no React.

```typescript
import React from "react";

interface Props {
   text: string,
   color: string,
   textColor: string
}

export default const HelloWorld = (props: Props) => { //você pode exportar o componente dessa maneira também
   return (
      <>
         <div className={props.color}>
            <p className={props.textColor}>{props.text}</p>
         </div>
      </>
   );
};
```
<br/>

### Parte 6: A diferença de inteface para type 
Type (Tipo):
Um "type" no TypeScript é como uma etiqueta que você coloca em alguma coisa para dizer o que é. Por exemplo, se você tem um brinquedo, você pode colocar uma etiqueta nele dizendo que é um carrinho. No TypeScript, você pode criar etiquetas (types) para dizer que um pedaço de informação é de um certo tipo. Pode ser um número, uma palavra, ou qualquer outra coisa!

```typescript
// Definindo um type chamado Animal
type Animal = {
  nome: string;
  tipo: string;
  fazerBarulho: () => void;
};

// Criando uma função que recebe um animal e imprime seu nome e tipo
function mostrarInformacoes(animal: Animal): void {
  console.log(`Nome: ${animal.nome}, Tipo: ${animal.tipo}`);
  animal.fazerBarulho();
}

// Criando um objeto usando o type Animal
const cachorro: Animal = {
  nome: 'Fido',
  tipo: 'Cachorro',
  fazerBarulho: () => {
    console.log('Au au!');
  },
};

// Chamando a função para mostrar informações sobre o cachorro
mostrarInformacoes(cachorro);
```

Interface (Interface):
Uma "interface" é como um contrato entre amigos. Quando você faz um acordo com um amigo sobre como vocês vão brincar juntos, você está criando uma espécie de regras, certo? Uma interface é um pouco assim. Ela diz como algo deve se parecer e o que deve fazer. Se você tem um conjunto de regras para um jogo, isso é um pouco como uma interface.


```typescript
// Definindo uma interface chamada Animal
interface Animal {
  nome: string;
  tipo: string;
  fazerBarulho: () => void;
}

// Criando uma função que recebe um animal e imprime seu nome e tipo
function mostrarInformacoes(animal: Animal): void {
  console.log(`Nome: ${animal.nome}, Tipo: ${animal.tipo}`);
  animal.fazerBarulho();
}

// Criando um objeto usando a interface Animal
const gato: Animal = {
  nome: 'Whiskers',
  tipo: 'Gato',
  fazerBarulho: () => {
    console.log('Miau!');
  },
};

// Chamando a função para mostrar informações sobre o gato
mostrarInformacoes(gato);
```

Diferença:
Então, imagine que você tem um brinquedo que é um carrinho. O "type" seria como dizer que esse brinquedo é um carrinho, enquanto a "interface" seria como listar todas as coisas que o carrinho pode fazer, como se ele pode se movimentar, fazer barulho, etc.

No TypeScript, "type" é mais flexível, como dizer "Isso é um carrinho!" e "interface" é mais sobre dizer "Carrinhos devem ter rodas, fazer barulho e se movimentar". Ambos são úteis, mas em situações diferentes!

```typescript
// Definindo uma interface chamada Animal
interface Animal {
  nome: string;
  tipo: string;
  fazerBarulho: () => void;
}

// Definindo uma interface chamada AnimalDomestico que estende a interface Animal
interface AnimalDomestico extends Animal {
  dono: string;
  brincar: () => void;
}
```
<br/>
<br/>
<br/>
<br/>


## Parte 7: Mostrando vários objetos

Você pode mostrar vários objetos usando o `.map` do javascript.

```typescript
import React from "react";

interface Props {
   text: string,
   color: string,
   textColor: string
}
      
export default const HelloWorld = () => { //você pode exportar o componente dessa maneira também
   const objects = {
      {
         text: "Hello World!",
         color: "bg-sky-900",
         textColor: "text-green-100"
      },
      {
         text: "Hello Mars!",
         color: "bg-red-900",
         textColor: "text-white"
      },
      {
         text: "Hello Jupyter!",
         color: "bg-yellow-900",
         textColor: "text-black"
      }
   }

   return (
      <>
         {objects.map((object) => {
            return (
               <div className={object.color}>
                  <p className={object.textColor}>{object.text}</p>
               </div>
            )
         })}
      </>
   );
};
```
<br/>
<br/>
<br/>
<br/>

## Parte 8: Usando Hooks

Em React, um "hook" é uma função especial que permite que você use o estado (state) e outras características do React em componentes funcionais. Antes dos hooks, os componentes funcionais eram principalmente usados para componentes simples, enquanto os componentes de classe eram necessários para funcionalidades mais avançadas, como gerenciamento de estado. Agora, com os hooks, você pode usar componentes funcionais para tudo!

### Principais Hooks em React:

### 1 - useState

O useState é usado para adicionar estado a componentes funcionais. Permite que você declare variáveis de estado dentro do seu componente funcional.

Exemplo:

```typescript
import React, { useState } from 'react';

function ExemploUseState() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </>
  );
};
```

### 2 - useEffect

useEffect é usado para realizar operações secundárias em componentes funcionais, como buscar dados, manipular o DOM, ou realizar ações após a renderização.

Exemplo:
```typescript
import React, { useState, useEffect } from 'react';

function ExemploUseEffect() {
  const [dados, setDados] = useState();

  useEffect(() => {
    fetch('https://api.example.com/dados')
      .then(response => response.json())
      .then(data => setDados(data));
  }, []); // O array vazio [] significa que este efeito ocorrerá apenas uma vez, equivalente ao componentDidMount em componentes de classe.

  return (
    <div>
      <p>Dados: {dados}</p>
    </div>
  );
};
```

### 3 - Use Memo
Este hook é útil quando você precisa memoizar um valor calculado, evitando recálculos desnecessários.

Exemplo:
```typescript
import React, { useState, useMemo } from 'react';

function CalculadoraRaizQuadrada({ numero: number }) {
  // useState para armazenar o número
  const [inputNumero, setInputNumero] = useState(numero);

  // useMemo para memoizar a raiz quadrada do número
  const raizQuadrada = useMemo(() => {
    console.log('Calculando a raiz quadrada...');
    return Math.sqrt(inputNumero);
  }, [inputNumero]); // Dependência: recalcula apenas quando o número muda

  return (
    <>
      <p>Número: {inputNumero}</p>
      <p>Raiz Quadrada: {raizQuadrada}</p>
      <input
        type="number"
        value={inputNumero}
        onChange={(e) => setInputNumero(Number(e.target.value))}
      />
    </>
  );
}

export default function App() {
  return <CalculadoraRaizQuadrada numero={25} />;
}

```
### Hooks Personalizados:

Às vezes, você pode querer criar sua própria lógica de gancho (hook) para reutilizar a lógica em vários componentes. Um gancho personalizado é basicamente uma função JavaScript que usa os hooks do React. Eles seguem as regras de nomenclatura e devem começar com "use" (por exemplo, useMeuHook).

Exemplo:
```typescript
import { useState, ChangeEvent } from 'react';

// Definindo um tipo para a função de alteração do campo
type HandleChange = (event: ChangeEvent<HTMLInputElement>) => void;

// Um hook personalizado para gerenciar um campo de formulário
function useCampoFormulario(valorInicial: string): [string, HandleChange, () => void] {
  const [valor, setValor] = useState<string>(valorInicial);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValor(event.target.value);
  }

  function limparCampo() {
    setValor('');
  }

  return [valor, handleChange, limparCampo];
}

// Uso do hook personalizado em um componente
function Formulario() {
  const [nome, handleNomeChange, limparNome] = useCampoFormulario('');
  const [email, handleEmailChange, limparEmail] = useCampoFormulario('');

  return (
    <form>
      <label>Nome:
        <input type="text" value={nome} onChange={handleNomeChange} />
      </label>
      <br />
      <label>Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button type="button" onClick={limparNome}>Limpar Nome</button>
      <button type="button" onClick={limparEmail}>Limpar Email</button>
    </form>
  );
}
```
<br/>
<br/>
<br/>
<br/>

## Parte 9: Flexbox e Grid

### 1) FlexBox
<a src="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Guia para flexbox</a>

Flexbox é um sistema de layout que permite que você organize elementos em uma página de maneira flexível. O flexbox é uma ótima maneira de criar layouts responsivos.
<br/>

#### Flexbox: display
```typescript
<div class="flex justify-around"> //mude o justify para ver o que acontece
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 1</h2>
    <p class="text-base">This is a description for card 1.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 2</h2>
    <p class="text-base">This is a description for card 2.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 3</h2>
    <p class="text-base">This is a description for card 3.</p>
  </div>
</div>
```
<br/>

#### Flexbox: flex-direction
```typescript
<div class="flex flex-col"> //mude o flex-direction para ver o que acontece
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 1</h2>
    <p class="text-base">This is a description for card 1.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 2</h2>
    <p class="text-base">This is a description for card 2.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 3</h2>
    <p class="text-base">This is a description for card 3.</p>
  </div>
</div>
```
<br/>

#### Flexbox: flex-wrap
```typescript
<div class="flex flex-wrap"> //mude o flex-wrap para ver o que acontece
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 1</h2>
    <p class="text-base">This is a description for card 1.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 2</h2>
    <p class="text-base">This is a description for card 2.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 3</h2>
    <p class="text-base">This is a description for card 3.</p>
  </div>
</div>
```
<br/>

#### Flexbox: justify-content
```typescript
<div class="flex justify-center"> //mude o justify-content para ver o que acontece
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 1</h2>
    <p class="text-base">This is a description for card 1.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 2</h2>
    <p class="text-base">This is a description for card 2.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 3</h2>
    <p class="text-base">This is a description for card 3.</p>
  </div>
</div>
```
<br/>

#### Flexbox: align-items
```typescript
<div class="flex items-center"> //mude o align-items para ver o que acontece
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 1</h2>
    <p class="text-base">This is a description for card 1.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 2</h2>
    <p class="text-base">This is a description for card 2.</p>
  </div>
  <div class="w-1/3 border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 3</h2>
    <p class="text-base">This is a description for card 3.</p>
  </div>
```
<br/>

### 2) Grid
<br/>

#### Grid: display
```typescript
<div class="grid grid-cols-3 gap-4"> //mude o grid-cols para ver o que acontece
  <div class="border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 1</h2>
    <p class="text-base">This is a description for card 1.</p>
  </div>
  <div class="border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 2</h2>
    <p class="text-base">This is a description for card 2.</p>
  </div>
  <div class="border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 3</h2>
    <p class="text-base">This is a description for card 3.</p>
  </div>
</div>
```
<br/>

#### Grid: grid-span
```typescript
<div class="grid grid-cols-3 gap-4">
  //mude o grid-span para ver o que acontece
  <div class="border border-gray-300 rounded p-2 m-2 grid-span-2">
    <h2 class="text-xl">Card 1</h2>
    <p class="text-base">This is a description for card 1.</p>
  </div>
  <div class="border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 2</h2>
    <p class="text-base">This is a description for card 2.</p>
  </div>
  <div class="border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 3</h2>
    <p class="text-base">This is a description for card 3.</p>
  </div>
```
<br/>

#### Grid: grid-rows
```typescript
<div class="grid grid-cols-3 grid-rows-2 gap-4"> //mude o grid-rows para ver o que acontece
  <div class="border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 1</h2>
    <p class="text-base">This is a description for card 1.</p>
  </div>
  <div class="border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 2</h2>
    <p class="text-base">This is a description for card 2.</p>
  </div>
  <div class="border border-gray-300 rounded p-2 m-2">
    <h2 class="text-xl">Card 3</h2>
    <p class="text-base">This is a description for card 3.</p>
  </div>
</div>
```
<br/>
<br/>
<br/>
<br/>

## Parte 10: Responsividade

O TailWindCSS fornece classes de utilitário para tornar seu site responsivo. Você pode usar essas classes para alterar o layout do seu site em diferentes tamanhos de tela. 

### Etapa 1: Breakpoints de tamanho

O TailWindCSS fornece breakpoints de tamanho para diferentes tamanhos de tela. Você pode usar esses breakpoints para tornar seu site responsivo.

```typescript
<img class="w-16 md:w-32 lg:w-48" src="IMAGE">
```
Modifier	Media query<br/>
max-sm <code>@media not all and (min-width: 640px) { ... } </code><br/>
max-md	<code>@media not all and (min-width: 768px) { ... } </code><br/>
max-lg <code>@media not all and (min-width: 1024px) { ... } </code><br/>
max-xl	<code>@media not all and (min-width: 1280px) { ... } </code><br/>
max-2xl	<code>@media not all and (min-width: 1536px) { ... } </code><br/>

### Etapa 2: Ocultar elementos em tamanhos de tela específicos

Você pode ocultar elementos em tamanhos de tela específicos usando as classes de utilitário de ocultar do TailWindCSS.

```typescript
<div class="hidden md:block"> //pode ser trocado pela organização flex
  <p>Hello World!</p>
</div>
```
<br/>

## Links úteis

### - Documentação e Tutoriais
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### - Design e Componentes
- [MambaUI](https://mambaui.com/)
- [Ant Design](https://ant.design/)
- [React Icons](https://react-icons.github.io/react-icons/)
