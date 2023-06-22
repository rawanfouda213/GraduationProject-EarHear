// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   SafeAreaView,
//   TextInput,
// } from "react-native";
// import { Audio } from "expo-av";
// import { Ionicons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { styles } from "./Signstyles";

// export default function Signiturepage() {
//   const [value, setValue] = React.useState("");
//   const [recording, setRecording] = React.useState();
//   const [recordings, setRecordings] = React.useState([]);
//   const [message, setMessage] = React.useState("");
//   const handleChange = (text) => {
//     setValue(text);
//   };
//   const handleSubmit = () => {
//     console.log(`The text input value is: ${value}`);
//     // setValue('');
//   };
//   async function prepareRecording() {
//     await Audio.setAudioModeAsync({
//       allowsRecordingIOS: true,
//       playsInSilentModeIOS: true,
//     });
//   }
//   prepareRecording();

//   async function startRecording() {
//     try {
//       const permission = await Audio.requestPermissionsAsync();

//       if (permission.status === "granted") {
//         await Audio.setAudioModeAsync({
//           allowsRecordingIOS: true,
//           playsInSilentModeIOS: true,
//         });

//         const { recording } = await Audio.Recording.createAsync(
//           Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
//         );

//         setRecording(recording);
//       } else {
//         setMessage("Please grant permission to app to access microphone");
//       }
//     } catch (err) {
//       console.error("Failed to start recording", err);
//     }
//   }

//   async function stopRecording() {
//     setRecording(undefined);
//     await recording.stopAndUnloadAsync();

//     let updatedRecordings = [...recordings];
//     const { sound, status } = await recording.createNewLoadedSoundAsync();
//     updatedRecordings.push({
//       sound: sound,
//       duration: getDurationFormatted(status.durationMillis),
//       file: recording.getURI(),
//     });

//     setRecordings(updatedRecordings);
//   }

//   function getDurationFormatted(millis) {
//     const minutes = millis / 1000 / 60;
//     const minutesDisplay = Math.floor(minutes);
//     const seconds = Math.round((minutes - minutesDisplay) * 60);
//     const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
//     return `${minutesDisplay}:${secondsDisplay}`;
//   }

//   function getRecordingLines() {
//     return recordings.map((recordingLine, index) => {
//       return (
//         <View key={index} style={styles.row}>
//           <Text style={styles.fill}>
//             Recording {index + 1} - {recordingLine.duration}
//           </Text>
//           <TouchableOpacity onPress={() => recordingLine.sound.replayAsync()}>
//             <AntDesign
//               style={styles.button}
//               name="play"
//               size={30}
//               color="#034b6e"
//             />
//           </TouchableOpacity>
//         </View>
//       );
//     });
//   }
//   // const handlePress = () => {
//   //   if (value) {
//   //     handleSubmit();

//   //   } else {
//   //     getRecordingLines();
//   //   }
//   // };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.avatarView}></View>
//       <View style={styles.textView}>
//         <View style={styles.textInputStyle}>
//           <TextInput
//             multiline
//             placeholder="Type to translate"
//             style={{ flex: 1 }}
//             value={value}
//             onChangeText={handleChange}
//           />

//           <TouchableOpacity
//             title={recording ? "Stop Recording" : "Start Recording"}
//             onPress={startRecording}
//             onPressOut={stopRecording}
//           >
//             {value.trim() ? (
//               <Ionicons
//                 size={30}
//                 name="md-send-sharp"
//                 color="#034b6e"
//                 style={{ marginLeft: "-1%" }}
//               />
//             ) : (
//               <Ionicons
//                 name="mic-circle"
//                 size={45}
//                 color="#034b6e"
//                 style={{ marginLeft: "-1%" }}
//               />
//             )}
//           </TouchableOpacity>
//           {getRecordingLines()}

//           <StatusBar style="auto" />
//         </View>
//         <Text>{message}</Text>
//       </View>
//     </SafeAreaView>
//   );
// }
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { Buffer } from "buffer";
import { styles } from "./Signstyles";
import * as FileSystem from 'expo-file-system';
const Signiturepage = () => {
  const [value, setValue] = useState("");
  const [recording, setRecording] = useState();
  const [audioURLs, setaudioURLs] = useState([]);
  const [message, setMessage] = useState("");
  const [transcripts, setTranscripts] = useState([]);

  useEffect(() => {
    getTranscript(audioURLs, setTranscripts);
  }, []);
  const APIKey = "f6992d1db64d4d4f866fbcf96cb0d4a3";
  const refreshInterval = 5000;
  const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2",
    headers: {
      authorization: APIKey
    }
  });

  const localWords = ["you", "TV", "like", "that", "and", "no"]; // example local dataset

  const readFile = async (path) => {
    const response = await RNFS.readFile(path);
    setFileData(response); //set the value of response to the fileData Hook.
  };

  const getSimilarity = (word1, word2) => {
    const set1 = new Set(word1.split(""));
    const set2 = new Set(word2.split(""));
    const intersection = new Set([...set1].filter((x) => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
  };
  const isSimilar = (word) => {
    const similarityThreshold = 0.7; // example threshold
    for (let i = 0; i < localWords.length; i++) {
      const localWord = localWords[i];
      const similarity = getSimilarity(word, localWord);
      if (similarity >= similarityThreshold) {
        console.log(
          `Similarity between "${word}" and "${localWord}" is ${similarity}`
        );
        return true;
      }
    }
    return false;
  };
  const getTranscript = async (urls, setTranscripts) => {
    try {
      const transcripts = [];
      for (let i = 0; i < urls.length; i++) {
        const response = await assembly.post("/transcript", {
          audio_url: urls[i],
        });
        const checkCompletionInterval = setInterval(async () => {
          const transcript = await assembly.get(
            `/transcript/${response.data.id}`
          );
          const transcriptStatus = transcript.data.status;
          if (transcriptStatus !== "completed") {
            console.log(`Transcript Status: ${transcriptStatus}`);
          } else if (transcriptStatus === "completed") {
            console.log(`\nTranscription for ${urls[i]} completed!\n`);
            let transcriptText = transcript.data.text;
            console.log(`Your transcribed text:\n\n${transcriptText}`);
            const words = transcriptText.split(" "); // split transcriptText into words
            words.forEach((word) => {
              if (isSimilar(word)) {
                transcripts.push(word); // push each word into transcripts if it is similar to a word in the local dataset
              }
            });
            clearInterval(checkCompletionInterval);
          }
        }, refreshInterval);
      }
      setTranscripts(transcripts);
    } catch (error) {
      console.error(error);
    }
  };

  //record functions///
  const handleChange = (text) => {
    setValue(text);
  };
  const handleSubmit = () => {
    console.log(`The text input value is: ${value}`);
    // setValue('');
  };
  async function prepareRecording() {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });
  }
  prepareRecording();

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync({
          android: {
            extension: ".m4a",
            audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
            outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
          },
          ios: {
            extension: ".wav",
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
            outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM,
          },
        });

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording(audioURLs, setaudioURLs) {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("uri is " + uri);
    var res = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
    //console.log("res is " + res)
    /*res = "data:audio/mp4;base64," + res;
    console.log("uploading file");
    const response = await assembly.post("/upload", res);*/
    
    const buff = Buffer.from(res, "base64")
    const response = await assembly.post("/upload", buff, {"content-type": "application/octet-stream"});
    const upload_url = response.data.upload_url;
    console.log("sending transcript request");
    const t_response = await assembly.post("/transcript", {audio_url: upload_url});
    const transcriptId = t_response.data.id;
    while(true) {
      const pollingResponse = await assembly.get("/transcript/" + transcriptId)
      const transcriptionResult = pollingResponse.data

      if (transcriptionResult.status === 'completed') {
        console.log("completed: " + transcriptionResult.text)
        setMessage(transcriptionResult.text)
        break;
      } else if (transcriptionResult.status === 'error') {
        throw new Error(`Transcription failed: ${transcriptionResult.error}`)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 3000))
      }
    }


    let updatedRecordings = [...audioURLs];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setaudioURLs(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }
  function getRecordingLines() {
    return audioURLs.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Recording {index + 1} - {recordingLine.duration}
          </Text>
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
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.avatarView}>
          <Text>Check the console for the transcribed text.</Text>
          {transcripts.map((transcript, index) => (
            <Text key={index}>{transcript}</Text>
          ))}
        </View>
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
              onPressOut={() => stopRecording(audioURLs, setaudioURLs)}
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
    </>
  );
};

export default Signiturepage;
