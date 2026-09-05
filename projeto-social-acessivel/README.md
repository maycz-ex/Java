# Plataforma Social Acessível

Projeto acadêmico de uma plataforma informativa sobre transformação social, baseado em informações públicas da Gerando Falcões. Não existe vínculo institucional com a organização.

## Objetivo

Demonstrar boas práticas de HTML semântico, design responsivo, formulários com validação compreensível, acessibilidade segundo princípios das WCAG e organização de versões com GitFlow.

## Como executar

O projeto não exige dependências externas. Abra `index.html` em um navegador moderno ou sirva a pasta com um servidor HTTP local.

```bash
npm test
npm run build
```

O comando de teste verifica elementos estruturais e referências locais. O build gera uma cópia otimizada em `dist/`.

## Estrutura

- `index.html`: apresentação e resumo da iniciativa;
- `projetos.html`: programas e frentes de atuação;
- `cadastro.html`: formulário acessível de interesse;
- `css/styles.css`: identidade visual responsiva e estados de foco;
- `js/main.js`: menu móvel e validação do formulário;
- `img/`: recursos visuais otimizados;
- `scripts/`: verificação e preparação da versão de produção.

## Acessibilidade

Foram aplicados landmarks semânticos, link de salto, ordem lógica de títulos, textos alternativos, navegação completa por teclado, foco visível, contraste de cores, mensagens associadas aos campos e suporte à preferência por movimento reduzido.

## Versionamento

A branch `main` representa versões estáveis. O desenvolvimento integrado ocorre em `develop`; funcionalidades e correções usam branches `feature/` e `fix/`. Lançamentos recebem tags no formato SemVer, como `v1.0.0`.

## Manutenção

Antes de publicar uma alteração, execute os testes, gere o build, revise a navegação por teclado e confirme o comportamento em telas estreitas. Mudanças devem ser pequenas, documentadas em commits semânticos e revisadas por pull request.

