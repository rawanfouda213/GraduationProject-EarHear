import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import Signiturepage from "../signiturePage/Signiturepage";
import Camerapage from "../cameraPage/Camerapage";

//Screen names
const SigniturepageName = "Voice";
const CamerapageName = "Camera";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={SigniturepageName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let rn = route.name;

          if (rn === SigniturepageName) {
            iconName = focused ? "mic" : "mic-outline";
          } else if (rn === CamerapageName) {
            iconName = focused ? "camera" : "camera-outline";
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#034b6e",
        inactiveTintColor: "#aaa",
        labelStyle: { paddingBottom: 55, fontSize: 12 },
        style: { padding: 10 },
        tabStyle: { backgroundColor: "#e8e8e8", height: 100 },
      }}
    >
      <Tab.Screen
        name={SigniturepageName}
        options={{ headerShown: false }}
        component={Signiturepage}
      />
      <Tab.Screen
        name={CamerapageName}
        options={{ headerShown: false }}
        component={Camerapage}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
