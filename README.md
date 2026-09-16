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

## Storybook

O projeto usa [Storybook](https://storybook.js.org/) 10 com o framework [`@storybook-astro/framework`](https://github.com/storybook-astro/storybook-astro) para documentar e desenvolver componentes de forma isolada.

As stories ficam em `src/stories/` e a configuração em `.storybook/`.

Para iniciar o Storybook:

```bash
pnpm storybook
```

Abra [http://localhost:6006](http://localhost:6006) no navegador.

## Testes E2E

Os testes end-to-end usam [Playwright](https://playwright.dev) e ficam na pasta `tests/` (ex.: `faq.spec.ts`, `mobile-menu.spec.ts`). A configuração está em `playwright.config.ts`.

Na primeira execução, instale os navegadores:

```bash
pnpm exec playwright install --with-deps
```

Para rodar os testes:

```bash
pnpm test      # roda os testes em modo headless
pnpm test:ui   # abre os testes no modo UI do Playwright
```

O Playwright inicia o servidor de desenvolvimento automaticamente antes dos testes (reutilizando um servidor já em execução, se houver). Por padrão os testes rodam contra `http://localhost:4321`; para usar outra URL, defina `BASE_URL` em um arquivo `.env.test` na raiz do projeto.

Os testes também rodam no CI através do workflow `.github/workflows/playwright.yml` a cada push ou PR para `main`/`master`, com o relatório disponível no artifact `playwright-report/`.

## Hooks de commit

O projeto usa [Lefthook](https://github.com/evilmartians/lefthook) para rodar o Prettier automaticamente no `pre-commit`. Os arquivos em stage são formatados antes do commit.

Para garantir que os hooks estejam instalados, rode:

```bash
pnpm exec lefthook install
```

## Licença

Este projeto é apenas para fins de demonstração.
