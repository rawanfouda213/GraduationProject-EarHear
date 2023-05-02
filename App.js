import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcomepage from "./pages/welcomePage/Welcomepage";
import Splashscreen from "./pages/splashScreen/Splashscreen";
import Signiturepage from "./pages/signiturePage/Signiturepage";
import Camerapage from "./pages/cameraPage/Camerapage";
import Tabs from "./pages/tabPage/Tabs";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splashscreen"
            component={Splashscreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcomepage"
            component={Welcomepage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Tabs"
            component={Tabs}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Signiturepage"
            component={Signiturepage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Camerapage"
            component={Camerapage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
