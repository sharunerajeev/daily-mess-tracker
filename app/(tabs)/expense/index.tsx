import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function ExpenseScreen() {
  // Sample expense data (replace with actual data from a database or API)
  const [expenses, setExpenses] = useState([
    { date: "2024-12-12", amount: 50 },
    { date: "2024-12-13", amount: 30 },
    { date: "2024-12-14", amount: 45 },
  ]);

  // Calculate total expense
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      {/* Total Expense */}
      <View style={styles.totalExpenseContainer}>
        <Text style={styles.totalExpenseLabel}>Total Expense:</Text>
        <Text style={styles.totalExpenseValue}>${totalExpense}</Text>
      </View>

      {/* Expense History */}
      <Text style={styles.historyLabel}>Expense History:</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyDate}>{item.date}</Text>
            <Text style={styles.historyAmount}>${item.amount}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyHistory}>No expenses recorded yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  totalExpenseContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
  },
  totalExpenseLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  totalExpenseValue: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  historyLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  historyDate: {
    fontSize: 16,
    color: "#333",
  },
  historyAmount: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
  emptyHistory: {
    textAlign: "center",
    color: "#777",
    marginTop: 20,
  },
});
