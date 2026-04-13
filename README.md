<p align="center">
    <img src="https://github.com/Yagasaki7K/website-advocato/blob/main/public/logo-transparente.png?raw=true"/>
</p>

# Projeto Kalify Inc - Advocato

Projeto open source na intenção de ajudar a comunidade no desenvolvimento. Todo feedback, sugestão será revisado.

A intenção do projeto é através de um consumo simples de API, facilitar a busca e as informações obtidas ao buscar processos judiciais. O projeto não tem cunho financeiro algum.

Obrigado aos envolvidos: @Yagasaki7K.

# Como contribuir?

- Verifique a disponibilidade da funcionalidade ou se ela já está em andamento através dos [projetos](https://github.com/users/Yagasaki7K/projects/10), se ela estiver disponível em "Ready", abra um pull request sobre.

1. Faça um fork do projeto.
2. Abra uma brench como `feature/nome-da-alteracao`
3. Faça as alterações
4. Abra um pull request
5. Aguarde feedbacks.

Se estiver com dificuldade, leia o artigo de [Curso de Introdução e Contribuição ao Código Aberto](https://yagasaki.vercel.app/artigo/introducao-ao-codigo-aberto)

Se estiver com dúvidas referente ao projeto [entre em nosso Discord](https://discord.gg/jhSepmE7nN)

# Sobre a inteligência artificial

- Devemos utilizar ela como ferramenta para obter conhecimento e em hipótese alguma será aceito pull requests em que a IA foi a responsável pelo desenvolvimento. Atente-se a isso e evite o famoso `copy and paste`, coloque a mão na massa.

# Tecnologias

- Vite (React) com Typescript - Simples, só precisaremos de uma landing page
- Express - Consultar API, rotas e tornar simples o consumo e entrega de requests
- Elysia - Para mais experientes (non-canonical)
- Banco de dados - Não necessário armazenar informações do usuário
- Auth - Não necessário autenticação

### O que seria a pasta sides

Fica livre a criação de novas pastas para projetos secundários na intenção de aprimoração como `/sides/rust`, `/sides/php`, `/sides/node` ou `/sides/dotnet`, por exemplo. Podem criar versões alternativas do projeto para buscar conhecimento ou aprimorar o conhecimento disponível usando a marca da Advocato.

Não é necessário o uso de banco de dados, usaremos uma API para consumir o projeto e não necessariamente precisará guardar essas informações.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            // Other configs...

            // Remove tseslint.configs.recommended and replace with this
            tseslint.configs.recommendedTypeChecked,
            // Alternatively, use this for stricter rules
            tseslint.configs.strictTypeChecked,
            // Optionally, add this for stylistic rules
            tseslint.configs.stylisticTypeChecked,

            // Other configs...
        ],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.node.json", "./tsconfig.app.json"],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            // Other configs...
            // Enable lint rules for React
            reactX.configs["recommended-typescript"],
            // Enable lint rules for React DOM
            reactDom.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.node.json", "./tsconfig.app.json"],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
]);
```
