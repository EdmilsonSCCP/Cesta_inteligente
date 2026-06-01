import { StyleSheet, Text, View } from "react-native";
import { Screen } from "../components/Screen";
import { SectionTitle } from "../components/SectionTitle";
import { StatCard } from "../components/StatCard";
import { purchaseHistory, shoppingItems } from "../data/mockData";
import { colors } from "../theme/colors";
import { formatCurrency } from "../utils/currency";

export function DashboardScreen() {
  const monthTotal = purchaseHistory.reduce((sum, purchase) => sum + purchase.total, 0);
  const pendingItems = shoppingItems.filter((item) => !item.checked).length;

  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Cesta Inteligente</Text>
        <Text style={styles.title}>Compre melhor, gaste menos.</Text>
        <Text style={styles.subtitle}>Acompanhe sua lista, histórico e consumo em um só lugar.</Text>
      </View>

      <View style={styles.statsRow}>
        <StatCard label="Gasto no mês" value={formatCurrency(monthTotal)} />
        <StatCard label="Pendentes" value={`${pendingItems} itens`} tone="accent" />
      </View>

      <SectionTitle>Próximos itens</SectionTitle>
      <View style={styles.list}>
        {shoppingItems
          .filter((item) => !item.checked)
          .map((item) => (
            <View key={item.id} style={styles.item}>
              <View>
                <Text style={styles.itemTitle}>{item.product}</Text>
                <Text style={styles.itemMeta}>
                  {item.quantity} {item.measure} • {item.market}
                </Text>
              </View>
              <Text style={styles.price}>{formatCurrency(item.estimatedPrice)}</Text>
            </View>
          ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 18,
    gap: 6
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "900"
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21
  },
  statsRow: {
    flexDirection: "row",
    gap: 12
  },
  list: {
    gap: 10
  },
  item: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14
  },
  itemTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800"
  },
  itemMeta: {
    color: colors.muted,
    marginTop: 4
  },
  price: {
    color: colors.primary,
    fontWeight: "800"
  }
});
