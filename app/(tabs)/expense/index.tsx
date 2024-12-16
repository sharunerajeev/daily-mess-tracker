import { View, Text, StyleSheet } from "react-native";

export default function ExpenseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
