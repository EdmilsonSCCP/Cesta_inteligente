import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

type StatCardProps = {
  label: string;
  value: string;
  tone?: "primary" | "accent";
};

export function StatCard({ label, value, tone = "primary" }: StatCardProps) {
  const isAccent = tone === "accent";

  return (
    <View style={[styles.card, { backgroundColor: isAccent ? colors.accentSoft : colors.primarySoft }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: isAccent ? colors.accent : colors.primary }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 92,
    borderRadius: 8,
    padding: 14,
    justifyContent: "space-between"
  },
  label: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "600"
  },
  value: {
    fontSize: 22,
    fontWeight: "800"
  }
});
