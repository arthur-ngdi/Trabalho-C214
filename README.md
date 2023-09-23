# Catálogo de Filmes

Essa pequena aplicação node que possibilita ao usuário cadastrar seus filmes, marcar os que já foram assistidos e dar a eles uma nota. Isso tudo é feito através do CLI.

## Installation

Foi utilizada a biblioteca `readline-sync` para possibilitar a interação do usuário com a aplicação e para fazer a instalação da biblioteca basta usar o comando abaixo:

```bash
  npm install
```

## Usage/Example

Segue o modelo para cada opção:

- a "titulo, lancamento, genero, duracao"
- b titulo_do_filme
- c titulo_do_filme nota

```javascript
> a "Hoje eu quero voltar sozinho, 2014, Romance/Drama, 1h 34m"
> b "Hoje eu quero voltar sozinho"
> c "Hoje eu quero voltar sozinho" "9.8"
```
