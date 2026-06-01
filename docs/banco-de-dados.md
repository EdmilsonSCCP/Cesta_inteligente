
# Banco de Dados

O app deve funcionar primeiro de forma local/offline usando SQLite. A sincronização em nuvem pode ser adicionada depois, sem bloquear o MVP.

## Entidades principais

### categories

Categorias dos produtos.

- `id`
- `name`
- `created_at`

### measures

Unidades de medida usadas na lista de compras.

- `id`
- `name`
- `abbreviation`
- `created_at`

### markets

Supermercados ou locais de compra.

- `id`
- `name`
- `address`
- `notes`
- `created_at`

### products

Produtos cadastrados pelo usuário.

- `id`
- `name`
- `brand`
- `category_id`
- `default_measure_id`
- `notes`
- `created_at`

### shopping_lists

Listas de compras criadas pelo usuário.

- `id`
- `name`
- `status`
- `created_at`
- `finished_at`

### shopping_list_items

Itens dentro de uma lista de compras.

- `id`
- `shopping_list_id`
- `product_id`
- `market_id`
- `measure_id`
- `quantity`
- `estimated_price`
- `actual_price`
- `checked`
- `created_at`

### purchases

Compras finalizadas.

- `id`
- `shopping_list_id`
- `market_id`
- `total`
- `purchased_at`

### purchase_items

Produtos comprados em uma compra finalizada.

- `id`
- `purchase_id`
- `product_id`
- `measure_id`
- `quantity`
- `unit_price`
- `total_price`

## Regras iniciais

- Uma lista começa com status `open`.
- Ao finalizar uma lista, o app cria uma compra em `purchases`.
- Os itens marcados como comprados viram registros em `purchase_items`.
- O histórico de consumo será calculado a partir de `purchase_items`.
- A comparação de preços será calculada a partir do preço por produto e mercado.
