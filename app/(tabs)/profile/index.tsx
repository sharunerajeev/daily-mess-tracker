import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  // Sample user data (you can replace this with fetched data later)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, Springfield, USA",
    avatar: "https://via.placeholder.com/150", // Placeholder image for avatar
  };

  return (
    <View style={styles.container}>
      {/* User Avatar */}
      <Image source={{ uri: user.avatar }} style={styles.avatar} />

      {/* User Name */}
      <Text style={styles.name}>{user.name}</Text>

      {/* User Details */}
      <View style={styles.details}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{user.phone}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{user.address}</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  details: {
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  editButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
