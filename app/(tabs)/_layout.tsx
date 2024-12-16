import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={24} color="black" />,
        }}></Tabs.Screen>
      <Tabs.Screen
        name="poll"
        options={{
          title: 'Poll',
          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={24} color="black" />,
        }}></Tabs.Screen>
      <Tabs.Screen
        name="expense"
        options={{
          title: 'Expense',
          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={24} color="black" />,
        }}></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={24} color="black" />,
        }}></Tabs.Screen>
    </Tabs>
  )
}
