export type ShoppingItem = {
  id: string;
  product: string;
  quantity: number;
  measure: string;
  category: string;
  market: string;
  estimatedPrice: number;
  checked: boolean;
};

export const shoppingItems: ShoppingItem[] = [
  {
    id: "1",
    product: "Arroz",
    quantity: 1,
    measure: "Pacote",
    category: "Alimentação",
    market: "Mercado Central",
    estimatedPrice: 28.9,
    checked: true
  },
  {
    id: "2",
    product: "Café",
    quantity: 2,
    measure: "Pacote",
    category: "Café",
    market: "Mercado Central",
    estimatedPrice: 19.5,
    checked: false
  },
  {
    id: "3",
    product: "Detergente",
    quantity: 3,
    measure: "Unidade",
    category: "Limpeza",
    market: "Atacadão",
    estimatedPrice: 2.79,
    checked: false
  }
];

export const catalogSummary = [
  { label: "Produtos", total: 12 },
  { label: "Categorias", total: 5 },
  { label: "Mercados", total: 3 },
  { label: "Medidas", total: 6 }
];

export const purchaseHistory = [
  { id: "1", market: "Mercado Central", date: "28/05/2026", total: 184.7, items: 17 },
  { id: "2", market: "Atacadão", date: "16/05/2026", total: 312.35, items: 29 },
  { id: "3", market: "Mercadinho Sol", date: "02/05/2026", total: 96.2, items: 9 }
];
