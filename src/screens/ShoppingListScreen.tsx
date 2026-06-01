import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "../components/Screen";
import { shoppingItems } from "../data/mockData";
import { colors } from "../theme/colors";
import { formatCurrency } from "../utils/currency";

export function ShoppingListScreen() {
  const estimatedTotal = shoppingItems.reduce((sum, item) => sum + item.estimatedPrice * item.quantity, 0);

  return (
    <Screen>
      <View style={styles.summary}>
        <View>
          <Text style={styles.summaryLabel}>Total estimado</Text>
          <Text style={styles.summaryValue}>{formatCurrency(estimatedTotal)}</Text>
        </View>
        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={20} color={colors.surface} />
          <Text style={styles.addButtonText}>Item</Text>
        </Pressable>
      </View>

      {shoppingItems.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.check, item.checked && styles.checkActive]}>
              {item.checked ? <Ionicons name="checkmark" size={16} color={colors.surface} /> : null}
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.product}>{item.product}</Text>
              <Text style={styles.meta}>
                {item.quantity} {item.measure} • {item.category}
              </Text>
            </View>
            <Text style={styles.itemPrice}>{formatCurrency(item.estimatedPrice)}</Text>
          </View>
          <Text style={styles.market}>{item.market}</Text>
        </View>
      ))}

      <Pressable style={styles.finishButton}>
        <Ionicons name="receipt" size={20} color={colors.surface} />
        <Text style={styles.finishText}>Finalizar compra</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  summary: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16
  },
  summaryLabel: {
    color: colors.muted,
    fontWeight: "700"
  },
  summaryValue: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900",
    marginTop: 3
  },
  addButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  addButtonText: {
    color: colors.surface,
    fontWeight: "800"
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 14
  },
  cardHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12
  },
  check: {
    alignItems: "center",
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    height: 28,
    justifyContent: "center",
    width: 28
  },
  checkActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  itemInfo: {
    flex: 1
  },
  product: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800"
  },
  meta: {
    color: colors.muted,
    marginTop: 3
  },
  itemPrice: {
    color: colors.primary,
    fontWeight: "900"
  },
  market: {
    color: colors.muted,
    marginLeft: 40,
    marginTop: 8
  },
  finishButton: {
    alignItems: "center",
    backgroundColor: colors.accent,
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginTop: 8,
    padding: 14
  },
  finishText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: "900"
  }
});
