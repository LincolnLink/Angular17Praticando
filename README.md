# Angular17Praticando

# Comandos basicos

 - Lista as versão de NodeJs
 
<blockquete>

        nvm list

</blockquete>

 - usa o nodejs selecionado. 
 
<blockquete>

        nvm use "numero da versão, que está na lista"

</blockquete>

 - Exibe a versão do Angular.
 
<blockquete>

        ng v

</blockquete>

 - lista as versoes do angular que está na maquina.
 
<blockquete>

        npm list -g @angular/cli

</blockquete>

- Criando projeto com a versao selecionada.

<blockquete>

        npx -p @angular/cli@X.X.X ng new my-project

</blockquete>

- 

<blockquete>



</blockquete>


# Criando um projeto no Angular 17
 
 - Criando projeto com Angular 17, praticando as novas funcionalidade.

 - fonte: https://www.youtube.com/watch?v=qJnjz8FIs6Q&list=PLGxZ4Rq3BOBpwaVgAPxTxhdX_TfSVlTcY&index=1&t=250s

 - https://www.youtube.com/watch?v=VzYRFLnnzkE&t=2s

# Standalone Components

 - Fonte: https://www.youtube.com/watch?v=c8YGsPx0zVk

 - Quando a opção standalone estiver true, siginifica que o componente é independente, não tem o arquivo module, o projeto não inicia com um app.module, a arquitetura é diferente.

 ### Convertendo para Standalone

  - Para converter um component para standalone, precisa declarar uma propriedade standalone como true, dentro do componente, abaixo do "selector".

  - Deve ser usar o Angular 15.2 ou superior.

<blockquete>

                standalone: true,

</blockquete>
 
  - Importando tudo que o template procisa para o component, incluindo outros components.

<blockquete>

                imports: [CommonModule, RouterOutlet],
                imports: [AsyncPipe, DecimalPipe, NgFor, Ngif],

</blockquete>

  - Caso tenha um model, remove o componente dele, não deve ser declarado no model.

  - Comando que converte aotomaticamente para standalone

  - Deve ser executado 3 vezes por que tem 2 etapas.
   - 1°: Convert all components, directives and pipes  to standalone.
   - 2°: Remove unnecessary NgModule classes.
   - 3°: Bootstrap the application using standalone APIs.

  - Na segunda etapa, ele deleta os model que não tem provider, nenhum component inicializado, nenhuma importação, nenhum membro de classe referente a module.

  - A parte de rotas e rotas filhas deve ser feita manualmente.

  - A 3° etapa, tudo que estva no app.modele, é passado para o main.ts.

  - É trocado o "platformBrowserDynamic" pelo "bootstrapApplication", ele recebe o component principal(AppComponet).

<blockquete>

                ng g @angular/core:standalone

</blockquete>

  - 


### Roteamento do Standalone

 - O sistema de roteamento é colocado no arquivo main.ts

# Instalação inicial

 - Instala o NODE, baixando pelo site do NODE.
 - Instala o NPM globalmente pelo comando:

<blockquete>

        npm install -g @angular/cli

</blockquete>

 - Angular material

<blockquete>

        ng add @angular/material

<blockquete>


# Comandos

 - criando projeto novo.

<blockquete>

        ng new crud-angular

</blockquete>

 - roteamento: sim
 - stylu: css

 - rodando o projeto 

<blockquete>

        ng serve

</blockquete>

# Arquivos - Overview do Projeto e Instalando o Angular Material

 - package.json
  - dependencia: pacotes que vai para produção.
  - devdependencies: pacotes que não vai para produção.

 - package-lock.josn: lista as dependencia.

 - tsconfig: configura o typescript.

 - angular.json
  - "sourceRoot": "src",: rota principal.
  - "prefix": "app", : prefixo.
  - "outputPath": "dist/crud-angular", : rota de produção.
  - "polyfills": ["zone.js"], : da suporte a navegadores mais antigos.
  - "strict": true : modifica como se declara variaveis.
  - scripts: por algo a mais como jquery
  - budgets: verificar se nao está estrapolando.
 - browserlistrc: da suporte aos navegadores.
 - apartir do 13 não tem suporte ao internet explore.
 - polyfills: so descomentar para da suporte.
 

 # CRUD Angular + Spring | 03 - Criando uma Toolbar na Página Principal

 - Nessa etapa foi instalado o "" e colocado o toolbar no component principal.

 - https://material.angular.io/components/toolbar/overview 
 - Copia e cola o html, e coloca as importações no component standalone.
 - 


# CRUD Angular + Spring | 04 - Criando o Módulo de Cursos e Usando Roteamento com Lazy Loading.
   
 - Comando que cria um component, cria o arquivo do component, html, css, e teste.

<blockquete>

                ng generate component --standalone Cursos

</blockquete>

# CRUD Angular + Spring | 05 - Customizando o Tema do Angular Material

 - trocando cores do angular usando variaveis de cores.
 - no css padrão aplica o codigo.

 - Testar depois com calma. 

<blockquete>

                /* 
                @import '@angular/material/prebuilt-themes/indigo-pink.css'; */


                :root {
                --mat-primary: #4ff321; /* Cor primária personalizada */
                --mat-accent: #FF4081; /* Cor de destaque personalizada */
                --mat-warn: #FFC107;   /* Cor de aviso personalizada */

                --background: #FFFFFF; /* Cor de fundo personalizada */
                --foreground: #333333; /* Cor do texto personalizada */
                --divider: #E0E0E0;    /* Cor da linha divisória personalizada */

                --elevation: #000000; /* Cor da sombra de elevação personalizada */
                --text: #000000; /* Cor do texto principal personalizada */
                --surface: #FFFFFF; /* Cor de fundo de superfícies personalizada */
                }

</blockquete>

# CRUD Angular + Spring | 06 - Criando Material Table para Listar Cursos - retornando.

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 


- 

<blockquete>

</blockquete>

- 

