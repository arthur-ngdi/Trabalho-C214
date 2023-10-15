[![CI Class](https://github.com/arthur-ngdi/Trabalho-C214/actions/workflows/node.js.yml/badge.svg)](https://github.com/arthur-ngdi/Trabalho-C214/actions/workflows/node.js.yml)
# Primeiro Trabalho do Laboratório de C214


Feito por: Amanda Silva Guimarães, Arthur Ferreira Silva, Manuela Gripp Silva e Maria Luiza Silva Raimundo.

## Gerenciador de Tarefas

Essa pequena aplicação node que possibilita ao usuário cadastrar suas tarefas, atualizá-las, excluí-las e. Isso tudo é feito através do CLI.

## Installation

Foi utilizada a biblioteca `readline-sync` para possibilitar a interação do usuário com a aplicação e para fazer a instalação da biblioteca basta usar o comando abaixo:

```bash
  npm install
```

## Usage/Example

### Para executar:

no diretório src

```bash
  npm run start GerenciadorDeTarefas.js
```

Segue o modelo para cada opção:

- a Adicionar nova tarefa
- b Visualizar a lista de tarefas
- c Atualizar o status da tarefa
- d Excluir tarefa
- e Sair

```javascript
> a Estudar "Estudar testes unitários da matéria de engenharia de software"
> b
> c Estudar "feito"
> d Estudar
> e
```
## Test

```bash
  npm test
```
