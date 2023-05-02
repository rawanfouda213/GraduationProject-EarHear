import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Signstyles";
import { Svg, Path } from "react-native-svg";

export default function Signiturepage() {
  const [value, setValue] = React.useState("");
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const handleChange = (text) => {
    setValue(text);
  };
  const handleSubmit = () => {
    console.log(`The text input value is: ${value}`);
    // setValue('');
  };
  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Recording {index + 1} - {recordingLine.duration}
          </Text>
          {/* <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button> */}
          <TouchableOpacity onPress={() => recordingLine.sound.replayAsync()}>
            <AntDesign
              style={styles.button}
              name="play"
              size={30}
              color="#034b6e"
            />
          </TouchableOpacity>
        </View>
      );
    });
  }
  // const handlePress = () => {
  //   if (value) {
  //     handleSubmit();

  //   } else {
  //     getRecordingLines();
  //   }
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarView}></View>
      <View style={styles.textView}>
        <View style={styles.textInputStyle}>
          <TextInput
            multiline
            placeholder="Type to translate"
            style={{ flex: 1 }}
            value={value}
            onChangeText={handleChange}
          />

          <TouchableOpacity
            title={recording ? "Stop Recording" : "Start Recording"}
            onPress={startRecording}
            onPressOut={stopRecording}
          >
            {value.trim() ? (
              <Ionicons
                size={30}
                name="md-send-sharp"
                color="#034b6e"
                style={{ marginLeft: "-1%" }}
              />
            ) : (
              <Ionicons
                name="mic-circle"
                size={45}
                color="#034b6e"
                style={{ marginLeft: "-1%" }}
              />
            )}
          </TouchableOpacity>
          {getRecordingLines()}

          <StatusBar style="auto" />
        </View>
        <Text>{message}</Text>
      </View>
    </SafeAreaView>
  );
}
