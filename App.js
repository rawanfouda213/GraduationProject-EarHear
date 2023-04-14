   import React from 'react';
   import { NavigationContainer } from '@react-navigation/native';
   import { createNativeStackNavigator } from '@react-navigation/native-stack';
   import Welcomepage from './pages/welcomePage/Welcomepage';
  import Splashscreen from './pages/splashScreen/Splashscreen';
  import Signiturepage from './pages/signiturePage/Signiturepage';
  import Camerapage from './pages/cameraPage/Camerapage';
   const App = () => {
    const Stack = createNativeStackNavigator();
     return (
      <>
       <NavigationContainer >
       <Stack.Navigator>
        <Stack.Screen  options={{headerShown: false}}name="Splashscreen" component={Splashscreen} />
        <Stack.Screen  options={{headerShown: false}}name="Welcomepage" component={Welcomepage} />
        <Stack.Screen  options={{headerShown: false}}name="Signiturepage" component={Signiturepage}/>  
        <Stack.Screen  options={{headerShown: false}}name="Camerapage" component={Camerapage} />  
      </Stack.Navigator>
        </NavigationContainer>
      </>
     );
   };
  export default App;





  // import { StatusBar } from 'expo-status-bar';
  // import { StyleSheet, Text, Button, View } from 'react-native';
  // import { en, ar } from './localizations';
  // import { useState } from 'react';
  // import * as Localization from 'expo-localization';
  // import {I18n} from 'i18n-js';
  
  // export default function App() {
  //   let [locale, setLocale] = useState(Localization.locale);
  //   I18n.fallbacks = true;
  //   I18n.translations = { en, ar};
  //   I18n.locale = locale;
  
  //   return (
  //     <View style={styles.container}>
  //       { locale !== "en" ? <Button title="Switch to English" onPress={() => setLocale("en")} /> : undefined }
  //       { locale !== "ar" ? <Button title="Switch to Arabic" onPress={() => setLocale("ar")} /> : undefined }
  //       <Text>{I18n.t('about')}</Text>
  //       <Text>{I18n.t('camera')}</Text>
  //       <StatusBar style="auto" />
  //     </View>
  //   );
  // }
  
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });