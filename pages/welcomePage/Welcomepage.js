import React , { useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';
//import { getLocales } from 'expo-localization';
import AwesomeButton from 'react-native-really-awesome-button';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Wstyles';
//const deviceLanguage = getLocales()[0].languageCode;
const windowDimensions = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ButtonSize = Math.floor(windowWidth * 0.5);
const Welcomepage = () => {
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
  });
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window}) => {
        setDimensions({window});
      },
    );
    return () => subscription?.remove();
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={[styles.logoContainer]}>
          <Image
            style={[styles.image]}
            source={require('./img/welcome.jpg')}
          />

        </View>
        <View style={[styles.TextContainer]}>
        <Text style={[styles.logoText]}>About App</Text>
          {/* <Text style={[styles.logoText]}>About App : {getLocales()[0].languageCode} </Text> */}
        </View>
        <View style={[styles.ContentContainer]}>
        <Text style={[styles.ContentText]}>
          EarHear uses AI to translate sign language
          and make the communication with each other get easier.
         
           </Text>
          {/* <Text style={[styles.ContentText]}>
          EarHear uses AI to translate sign language
          and make the communication with each other get easier.
          : {getLocales()[0].languageCode}
           </Text> */}
        </View>
        <View style={[styles.ButtonContainer]}>
        <AwesomeButton
      width={ButtonSize}
      backgroundColor={'#034b6e'}
      textSize={20}
       progress
       onPress={() => {
         
        navigation.navigate('Signiturepage')
       }}
     >  
      Start Now 
     </AwesomeButton>
    </View>
      </View>
    </SafeAreaView>
    
  );
};

export default Welcomepage;

