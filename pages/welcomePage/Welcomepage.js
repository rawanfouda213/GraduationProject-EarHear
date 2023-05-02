import React, { useState, useEffect } from "react";
import { SafeAreaView, Image, Text, View, Dimensions } from "react-native";
//import { getLocales } from 'expo-localization';
import AwesomeButton from "react-native-really-awesome-button";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Wstyles";
import Swiper from "react-native-web-swiper";
//const deviceLanguage = getLocales()[0].languageCode;

const windowDimensions = Dimensions.get("window");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ButtonSize = Math.floor(windowWidth * 0.5);
const Welcomepage = () => {
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
  });
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });
    return () => subscription?.remove();
  });
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Swiper>
          <View style={styles.contentContainer}>
            <View style={[styles.logoContainer]}>
              <Image
                style={[styles.image]}
                source={require("./img/undraw_Welcoming_re_x0qo.png")}
              />
            </View>
            <View style={[styles.TextContainer]}>
              <Text style={[styles.logoText]}>Hi there!</Text>
            </View>
            <View style={[styles.ContentContainer]}>
              <Text style={[styles.ContentText]}>
                Hello, It's EarHear Application that will help you integrate
                with Society.
              </Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={[styles.logoContainer]}>
              <Image
                style={[styles.image]}
                source={require("./img/about.jpg")}
              />
            </View>
            <View style={[styles.TextContainer]}>
              <Text style={[styles.logoText]}>About App</Text>
            </View>
            <View style={[styles.ContentContainer]}>
              <Text style={[styles.ContentText]}>
                EarHear uses AI to translate sign language to text and audio and
                vice versa so the communication with each other will get easier.
              </Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={[styles.logoContainer]}>
              <Image
                style={[styles.image]}
                source={require("./img/voice.jpg")}
              />
            </View>
            <View style={[styles.TextContainer]}>
              <Text style={[styles.logoText]}>Voice Recorder</Text>
            </View>
            <View style={[styles.ContentContainer]}>
              <Text style={[styles.ContentText]}>
                You can use Voice Recorder to record your talks and AI will
                translate them to Text and SignLanguage.
              </Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={[styles.logoContainer]}>
              <Image style={[styles.image]} source={require("./img/cam.jpg")} />
            </View>
            <View style={[styles.TextContainer]}>
              <Text style={[styles.logoText]}>Camera</Text>
            </View>
            <View style={[styles.ContentContainer]}>
              <Text style={[styles.ContentText]}>
                {/* The App has two features Voice Recorder and Camera.{'\n'}
      
          1- You can use Voice Recorder to record your talks
            and AI will translate them to Text and SignLanguage.{'\n'} */}
                You can use Camera to translate SignLanguage to Text using AI.
                {"\n"}
              </Text>
            </View>
            <View style={[styles.ButtonContainer]}>
              <AwesomeButton
                width={ButtonSize}
                backgroundColor={"#034b6e"}
                textSize={20}
                progress
                onPress={() => {
                  navigation.navigate("Tabs");
                }}
              >
                Start Now
              </AwesomeButton>
            </View>
          </View>
        </Swiper>
      </SafeAreaView>
    </>
  );
};

export default Welcomepage;
