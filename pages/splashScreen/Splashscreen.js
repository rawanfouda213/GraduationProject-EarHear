import React, { useRef, useEffect ,useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  {styles} from './styles' ;
// import {en ,ar} from './localizations';
// import * as Localization from 'expo-localization';
// import i18n from 'i18n-js';
const windowDimensions = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Splashscreen  = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;  
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
    navigation.navigate('Welcomepage');
     }, 4500);
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);
  
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.View style={[styles.logoContainer, { marginRight: moveAnim }]}>
          <Animated.Image
            style={[styles.image, { opacity: fadeAnim }]}
            source={require('./img/logo.jpg')}
          />

        </Animated.View>
        <Animated.View style={[styles.logoContainer, { marginLeft: moveAnim }]}>
          <Text style={[styles.logoText]}>Ear</Text>
          <Text> </Text>
          <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
            Hear
          </Animated.Text>
        </Animated.View>
     
      </View>
    </SafeAreaView>
  </>
  );
};


export default Splashscreen;
















