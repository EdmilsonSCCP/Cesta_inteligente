import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Screen } from "../components/Screen";
import { SectionTitle } from "../components/SectionTitle";
import { catalogSummary } from "../data/mockData";
import { colors } from "../theme/colors";

const shortcuts = [
  { title: "Produtos", description: "Nome, marca, categoria e medida", icon: "cube" },
  { title: "Categorias", description: "Alimentação, limpeza, higiene e outros", icon: "pricetags" },
  { title: "Mercados", description: "Nome, endereço e observações", icon: "storefront" },
  { title: "Medidas", description: "Unidade, kg, litro, pacote e caixa", icon: "scale" }
] as const;

export function CatalogScreen() {
  return (
    <Screen>
      <View style={styles.grid}>
        {catalogSummary.map((item) => (
          <View key={item.label} style={styles.summaryCard}>
            <Text style={styles.summaryTotal}>{item.total}</Text>
            <Text style={styles.summaryLabel}>{item.label}</Text>
          </View>
        ))}
      </View>

      <SectionTitle>Cadastros</SectionTitle>
      {shortcuts.map((item) => (
        <Pressable key={item.title} style={styles.shortcut}>
          <View style={styles.iconBox}>
            <Ionicons name={item.icon} size={22} color={colors.primary} />
          </View>
          <View style={styles.shortcutText}>
            <Text style={styles.shortcutTitle}>{item.title}</Text>
            <Text style={styles.shortcutDescription}>{item.description}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.muted} />
        </Pressable>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  summaryCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 14,
    width: "48%"
  },
  summaryTotal: {
    color: colors.primary,
    fontSize: 26,
    fontWeight: "900"
  },
  summaryLabel: {
    color: colors.muted,
    fontWeight: "700",
    marginTop: 4
  },
  shortcut: {
    alignItems: "center",
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    padding: 14
  },
  iconBox: {
    alignItems: "center",
    backgroundColor: colors.primarySoft,
    borderRadius: 8,
    height: 44,
    justifyContent: "center",
    width: 44
  },
  shortcutText: {
    flex: 1
  },
  shortcutTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800"
  },
  shortcutDescription: {
    color: colors.muted,
    marginTop: 3
  }
});
