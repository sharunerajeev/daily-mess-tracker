import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function HomeScreen() {
  // Mock data (replace with actual data)
  const [poll, setPoll] = useState({
    morning: true,
    afternoon: false,
    night: true,
  });
  const [totalExpense, setTotalExpense] = useState(125); // Mock expense value
  const [notifications, setNotifications] = useState([
    "Your poll for today is incomplete!",
    "Don't forget to add your dinner expense.",
  ]);

  // Data to render the sections (flattened structure for FlatList)
  const data = [
    { id: "welcome", type: "welcome" },
    { id: "poll", type: "poll" },
    { id: "expense", type: "expense" },
    { id: "notifications", type: "notifications" },
  ];

  // Render items based on type
  const renderItem = ({ item }: { item: { id: string; type: string } }) => {
    switch (item.type) {
      case "welcome":
        return (
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome, User!</Text>
            <Text style={styles.subText}>Here’s a quick overview of your day:</Text>
          </View>
        );
      case "poll":
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Today's Poll:</Text>
            <View style={styles.pollSnapshot}>
              <Text style={styles.pollItem}>
                Morning: {poll.morning ? "Yes" : "No"}
              </Text>
              <Text style={styles.pollItem}>
                Afternoon: {poll.afternoon ? "Yes" : "No"}
              </Text>
              <Text style={styles.pollItem}>
                Night: {poll.night ? "Yes" : "No"}
              </Text>
            </View>
          </View>
        );
      case "expense":
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Total Expense:</Text>
            <Text style={styles.expenseValue}>${totalExpense}</Text>
          </View>
        );
      case "notifications":
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notifications:</Text>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <View key={index} style={styles.notificationItem}>
                  <Text style={styles.notificationText}>{notification}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noNotifications}>No new notifications</Text>
            )}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pollSnapshot: {
    flexDirection: "column",
  },
  pollItem: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  expenseValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#28A745",
  },
  notificationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  notificationText: {
    fontSize: 16,
    color: "#333",
  },
  noNotifications: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    padding: 10,
  },
});
