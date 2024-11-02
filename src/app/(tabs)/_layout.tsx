import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import NotificationProvider from "../providers/NotificationProvider";

const TabsLayout = () => {
  return (
    <NotificationProvider>
      <Tabs
      screenOptions={{ tabBarActiveTintColor: "black", tabBarShowLabel: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "For you",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          headerTitle: "New Post",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-square" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
    </NotificationProvider>
  );
};

export default TabsLayout;
