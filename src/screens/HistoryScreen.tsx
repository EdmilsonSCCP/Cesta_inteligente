import { StyleSheet, Text, View } from "react-native";
import { Screen } from "../components/Screen";
import { SectionTitle } from "../components/SectionTitle";
import { purchaseHistory } from "../data/mockData";
import { colors } from "../theme/colors";
import { formatCurrency } from "../utils/currency";

export function HistoryScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Compras recentes</Text>
        <Text style={styles.headerSubtitle}>Base para calcular consumo médio e evolução de preços.</Text>
      </View>

      {purchaseHistory.map((purchase) => (
        <View key={purchase.id} style={styles.purchaseCard}>
          <View>
            <Text style={styles.market}>{purchase.market}</Text>
            <Text style={styles.meta}>
              {purchase.date} • {purchase.items} produtos
            </Text>
          </View>
          <Text style={styles.total}>{formatCurrency(purchase.total)}</Text>
        </View>
      ))}

      <SectionTitle>Indicadores planejados</SectionTitle>
      <View style={styles.metricList}>
        <Text style={styles.metric}>Produtos mais comprados</Text>
        <Text style={styles.metric}>Frequência de compra</Text>
        <Text style={styles.metric}>Consumo médio mensal</Text>
        <Text style={styles.metric}>Preço médio por mercado</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primarySoft,
    borderRadius: 8,
    padding: 16
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "900"
  },
  headerSubtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
    marginTop: 5
  },
  purchaseCard: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14
  },
  market: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800"
  },
  meta: {
    color: colors.muted,
    marginTop: 4
  },
  total: {
    color: colors.primary,
    fontWeight: "900"
  },
  metricList: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 14,
    gap: 10
  },
  metric: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700"
  }
});
