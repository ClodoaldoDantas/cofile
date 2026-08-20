# Cofile

Landing page estática para o app Cofile, um aplicativo de consulta de taxas de câmbio em tempo real.

## Tecnologias

- [Astro](https://astro.build/) 7
- TypeScript
- CSS puro com variáveis customizadas
- [Alpine.js](https://alpinejs.dev/) para pequenas interações

## Pré-requisitos

- Node.js >= 22.12.0
- pnpm

## Como rodar

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

Abra [http://localhost:4321](http://localhost:4321) no navegador.

## Scripts

```bash
pnpm dev      # servidor de desenvolvimento
pnpm build    # build para produção
pnpm preview  # visualiza o build de produção
pnpm format   # formata os arquivos de ./src
```

## Hooks de commit

O projeto usa [Lefthook](https://github.com/evilmartians/lefthook) para rodar o Prettier automaticamente no `pre-commit`. Os arquivos em stage são formatados antes do commit.

Para garantir que os hooks estejam instalados, rode:

```bash
pnpm exec lefthook install
```

## Licença

Este projeto é apenas para fins de demonstração.
