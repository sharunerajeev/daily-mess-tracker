import { Tabs } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0.5,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" color={color} size={size} />
          ),
        }}
      />

      {/* Poll Tab */}
      <Tabs.Screen
        name="poll/index"
        options={{
          title: "Poll",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="poll" color={color} size={size} />
          ),
        }}
      />

      {/* Expense Tab */}
      <Tabs.Screen
        name="expense/index"
        options={{
          title: "Expense",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="wallet" color={color} size={size} />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
