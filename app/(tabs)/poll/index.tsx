import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function PollScreen() {
  // States for date and poll options
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [poll, setPoll] = useState({
    morning: false,
    afternoon: false,
    night: false,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Handle date change
  const handleDateChange = (event: any, date?: Date) => {
    if (date) setSelectedDate(date);
    setShowDatePicker(false);
  };

  // Toggle poll selection
  const togglePollOption = (option: keyof typeof poll) => {
    setPoll((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Poll Submitted:", {
      date: selectedDate.toISOString().split("T")[0],
      ...poll,
    });
    alert("Poll submitted successfully!");
  };

  return (
    <View style={styles.container}>
      {/* Date Selector */}
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateSelector}>
        <Text style={styles.dateText}>
          Date: {selectedDate.toISOString().split("T")[0]} (Tap to change)
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          minimumDate={new Date()}
          onChange={handleDateChange}
        />
      )}

      {/* Poll Multi-Select Options */}
      <View style={styles.pollContainer}>
        <Text style={styles.label}>Select Your Poll:</Text>

        <TouchableOpacity
          style={[styles.option, poll.morning && styles.optionSelected]}
          onPress={() => togglePollOption("morning")}
        >
          <Text style={styles.optionText}>Morning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, poll.afternoon && styles.optionSelected]}
          onPress={() => togglePollOption("afternoon")}
        >
          <Text style={styles.optionText}>Afternoon</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, poll.night && styles.optionSelected]}
          onPress={() => togglePollOption("night")}
        >
          <Text style={styles.optionText}>Night</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Poll</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  dateSelector: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dateText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  pollContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  optionSelected: {
    backgroundColor: "#007BFF",
    borderColor: "#0056b3",
  },
  optionText: {
    color: "#333",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
