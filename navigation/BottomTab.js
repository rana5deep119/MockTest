// ...existing code...
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import PlayList from "../Screens/Playlist";
import Library from '../Screens/Library'
import Profile from "../Screens/Profile";
import Home from "../Screens/Home";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "black",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Library") {
            iconName = "add-circle-outline";
          } else if (route.name === "PlayList") {
            iconName = "list-outline";
          } else if (route.name === "Profile") {
            iconName = "search-outline";
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
      })}
    >
       <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});