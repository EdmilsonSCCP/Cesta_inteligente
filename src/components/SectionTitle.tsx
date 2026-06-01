import { StyleSheet, Text } from "react-native";
import { colors } from "../theme/colors";

type SectionTitleProps = {
  children: string;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
    marginTop: 8
  }
});
