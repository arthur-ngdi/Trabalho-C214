# Catálogo de Filmes

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
  node GerenciadorDeTarefas.js
```

Segue o modelo para cada opção:

- a Adicionar nova tarefa
- b Visualizar a lista de tarefas
- c Atualizar o status da tarefa
- d Excluir tarefa
- e Sair

```javascript
> a Estudar C214 "Estudar testes unitários da matéria de engenharia de software"
> b
> c Estudar C214 "feito"
> d Estudar C214
> e
```
## Test

```bash
  npm test
```