   import React from 'react';
   import { NavigationContainer } from '@react-navigation/native';
   import { createNativeStackNavigator } from '@react-navigation/native-stack';
   import Welcomepage from './pages/welcomePage/Welcomepage';
  import Splashscreen from './pages/splashScreen/Splashscreen';
  import Signiturepage from './pages/signiturePage/Signiturepage';
  import Camerapage from './pages/cameraPage/Camerapage';
  import Tabs from './pages/tabPage/Tabs';
   const App = () => {
    const Stack = createNativeStackNavigator();
     return (
      <>
       <NavigationContainer >
       <Stack.Navigator>
        <Stack.Screen  options={{headerShown: false}}name="Splashscreen" component={Splashscreen} />
        <Stack.Screen  options={{headerShown: false}}name="Welcomepage" component={Welcomepage} />
        <Stack.Screen  options={{headerShown: false}}name="Tabs" component={Tabs} />
        <Stack.Screen  options={{headerShown: false}}name="Signiturepage" component={Signiturepage}/>  
        <Stack.Screen  options={{headerShown: false}}name="Camerapage" component={Camerapage} />  
      </Stack.Navigator>
        </NavigationContainer>
      </>
     );
   };
  export default App;

/////////////////////////////Audio Code///////////////////////////////

  // import { StatusBar } from 'expo-status-bar';
  // import React from 'react';
  // import { Button, StyleSheet, Text, View } from 'react-native';
  // import { Audio } from 'expo-av';
  // import * as Sharing from 'expo-sharing';
  
  // export default function App() {
  //   const [recording, setRecording] = React.useState();
  //   const [recordings, setRecordings] = React.useState([]);
  //   const [message, setMessage] = React.useState("");
  
  //   async function startRecording() {
  //     try {
  //       const permission = await Audio.requestPermissionsAsync();
  
  //       if (permission.status === "granted") {
  //         await Audio.setAudioModeAsync({
  //           allowsRecordingIOS: true,
  //           playsInSilentModeIOS: true
  //         });
          
  //         const { recording } = await Audio.Recording.createAsync(
  //           Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
  //         );
  
  //         setRecording(recording);
  //       } else {
  //         setMessage("Please grant permission to app to access microphone");
  //       }
  //     } catch (err) {
  //       console.error('Failed to start recording', err);
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
  //       file: recording.getURI()
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
  //           <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
  //           <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
  //           <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
  //         </View>
  //       );
  //     });
  //   }
  
  //   return (
  //     <View style={styles.container}>
  //       <Text>{message}</Text>
  //       <Button
  //         title={recording ? 'Stop Recording' : 'Start Recording'}
  //         onPress={recording ? stopRecording : startRecording} />
  //       {getRecordingLines()}
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
  //   row: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   fill: {
  //     flex: 1,
  //     margin: 16
  //   },
  //   button: {
  //     margin: 16
  //   }
  // });
  















  ////////////////////////////////////camera code //////////////////////////////////////
  // import React from 'react';
  // import { StatusBar } from 'expo-status-bar';
  // import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
  // import { useEffect, useRef, useState } from 'react';
  // import { Camera } from 'expo-camera';
  // import { shareAsync } from 'expo-sharing';
  // import * as MediaLibrary from 'expo-media-library';
  
  // export default function App() {
  //   let cameraRef = useRef();
  //   const [hasCameraPermission, setHasCameraPermission] = useState();
  //   const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  //   const [photo, setPhoto] = useState();
  
  //   useEffect(() => {
  //     (async () => {
  //       const cameraPermission = await Camera.requestCameraPermissionsAsync();
  //       const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
  //       setHasCameraPermission(cameraPermission.status === "granted");
  //       setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
  //     })();
  //   }, []);
  
  //   if (hasCameraPermission === undefined) {
  //     return <Text>Requesting permissions...</Text>
  //   } else if (!hasCameraPermission) {
  //     return <Text>Permission for camera not granted. Please change this in settings.</Text>
  //   }
  
  //   let takePic = async () => {
  //     let options = {
  //       quality: 1,
  //       base64: true,
  //       exif: false
  //     };
  
  //     let newPhoto = await cameraRef.current.takePictureAsync(options);
  //     setPhoto(newPhoto);
  //   };
  
  //   if (photo) {
  //     let sharePic = () => {
  //       shareAsync(photo.uri).then(() => {
  //         setPhoto(undefined);
  //       });
  //     };
  
  //     let savePhoto = () => {
  //       MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
  //         setPhoto(undefined);
  //       });
  //     };
  
  //     return (
  //       <SafeAreaView style={styles.container}>
  //         <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
  //         <Button title="Share" onPress={sharePic} />
  //         {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
  //         <Button title="Discard" onPress={() => setPhoto(undefined)} />
  //       </SafeAreaView>
  //     );
  //   }
  
  //   return (
  //     <Camera style={styles.container} ref={cameraRef}>
  //       <View style={styles.buttonContainer}>
  //         <Button title="Take Pic" onPress={takePic} />
  //       </View>
  //       <StatusBar style="auto" />
  //     </Camera>
  //   );
  // }
  
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   buttonContainer: {
  //     backgroundColor: '#fff',
  //     alignSelf: 'flex-end'
  //   },
  //   preview: {
  //     alignSelf: 'stretch',
  //     flex: 1
  //   }
  // });
  

 
