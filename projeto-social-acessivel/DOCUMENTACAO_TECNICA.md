# Documentação técnica — versão 1.0

## Visão geral

A aplicação é um site estático multipágina. HTML, CSS e JavaScript são mantidos sem framework para facilitar a leitura, a manutenção e a publicação em qualquer serviço de hospedagem estática.

## Arquitetura

As três páginas compartilham cabeçalho, navegação e rodapé. A folha de estilos centraliza tokens de cor, componentes, estados de foco e regras responsivas. O JavaScript é progressivo: sem ele, o conteúdo e os links continuam acessíveis; com ele, o menu móvel e a validação enriquecida do formulário são ativados.

## Fluxo de contribuição

1. Atualizar a branch `develop`.
2. Criar uma branch `feature/` ou `fix/`.
3. Implementar uma alteração pequena e testável.
4. Executar a verificação estrutural e o build.
5. Abrir um pull request para revisão.
6. Integrar a mudança e remover a branch temporária.

## Testes

O script `scripts/check.mjs` confirma landmarks, idioma, link de salto, navegação identificada e a existência de arquivos referenciados. A revisão manual cobre teclado, zoom, leitores de tela, contraste, responsividade e mensagens do formulário.

## Build e publicação

O script `scripts/build.mjs` recria a pasta `dist`, reúne as páginas e os recursos e reduz espaços desnecessários nos arquivos de texto. A saída pode ser publicada em um servidor estático preservando a estrutura de diretórios.

## Compatibilidade

O projeto usa recursos estáveis da plataforma Web e foi planejado para versões atuais de Chrome, Edge e Firefox. O layout se adapta a telas estreitas a partir de 760 px e respeita a configuração de redução de movimento do sistema.

## Responsabilidade sobre o conteúdo

O material foi produzido apenas para fins acadêmicos, com base em informações públicas. A página informa claramente que não possui vínculo institucional com a Gerando Falcões.

