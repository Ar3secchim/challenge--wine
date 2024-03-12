## Deploy on Vercel

## Requisitos do desafio

O desafio será implementar um e-commerce para venda de vinhos que deverá ter as seguintes funcionalidades:

- [x] Catálogo de produtos com paginação
- [x] Faça a estilização com styled-components
- [x] Busca por nome do produto
- [x] Filtragem produtos por preço
- [] Adicionar e remover produtos do carrinho
- [] Utilize o local storage para gerenciar o carrinho

## Decisões para solução de cada requisito

- _paginação_: A paginação ajuda os mecanismos de pesquisa a entender a estrutura do seu site e garante que todas as suas páginas sejam indexadas, o que é particularmente importante para sites com listas de produtos. Utilizar a renderização do lado do servidor em Next.js para paginação garante que cada link de página seja capturado pelos mecanismos de pesquisa, melhorando significativamente o SEO do site.
- _styled-components_: Para a estilização styled-components usei a lib `Tailwind-Styled-Component` que faz o mix de style-components usando tailwind.
- _buscar por nome_: É realizar por params que é passada  na url, assim posso fazer uma buscar além de permitir que o filtro continua aplicado caso essa url seja conpartilhada.
- _filtros_: É realizar por params que é passada na url, assim podendo realizar varios filtros.

## ✔️ Critérios de Avaliação

Além dos requisitos levantados acima, iremos olhar para os seguintes critérios durante a correção do desafio:

- [] Gerenciamento de estado
- [] Componentização
- [] Responsividade
- [] Preocupação com usabilidade
- [] Preocupação com acessibilidade
- [] Testes e2e
- [] Padrões de código
- [x] Padrão de commits (Conventional)

## 😎 Seria legal

- [] Fazer deploy na vercel ou em outro local de sua preferência e disponibilizar um link de visualização
- [] Testes unitários
- [x] Utilização de cache do Next.js.
