////////////////////////////////////Video Code///////////////////////////////////////////////////
// import React from 'react';
// import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
// import { useEffect, useState, useRef } from 'react';
// import { Camera } from 'expo-camera';
// import { Video } from 'expo-av';
// import { shareAsync } from 'expo-sharing';
// import * as MediaLibrary from 'expo-media-library';

// export default function Camerapage() {
//   let cameraRef = useRef();
//   const [hasCameraPermission, setHasCameraPermission] = useState();
//   const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
//   const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
//   const [isRecording, setIsRecording] = useState(false);
//   const [video, setVideo] = useState();

//   useEffect(() => {
//     (async () => {
//       const cameraPermission = await Camera.requestCameraPermissionsAsync();
//       const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
//       const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

//       setHasCameraPermission(cameraPermission.status === "granted");
//       setHasMicrophonePermission(microphonePermission.status === "granted");
//       setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
//     })();
//   }, []);

//   if (hasCameraPermission === undefined || hasMicrophonePermission === undefined) {
//     return <Text>Requestion permissions...</Text>
//   } else if (!hasCameraPermission) {
//     return <Text>Permission for camera not granted.</Text>
//   }

//   let recordVideo = () => {
//     setIsRecording(true);
//     let options = {
//       quality: "1080p",
//       maxDuration: 60,
//       mute: false
//     };

//     cameraRef.current.recordAsync(options).then((recordedVideo) => {
//       setVideo(recordedVideo);
//       setIsRecording(false);
//     });
//   };

//   let stopRecording = () => {
//     setIsRecording(false);
//     cameraRef.current.stopRecording();
//   };

//   if (video) {
//     let shareVideo = () => {
//       shareAsync(video.uri).then(() => {
//         setVideo(undefined);
//       });
//     };

//     let saveVideo = () => {
//       MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
//         setVideo(undefined);
//       });
//     };

//     return (
//       <SafeAreaView style={styles.container}>
//         <Video
//           style={styles.video}
//           source={{uri: video.uri}}
//           useNativeControls
//           resizeMode='contain'
//           isLooping
//         />
//         <Button title="Share" onPress={shareVideo} />
//         {hasMediaLibraryPermission ? <Button title="Save" onPress={saveVideo} /> : undefined}
//         <Button title="Discard" onPress={() => setVideo(undefined)} />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <Camera style={styles.container} ref={cameraRef}>
//       <View style={styles.buttonContainer}>
//         <Button title={isRecording ? "Stop Recording" : "Record Video"} onPress={isRecording ? stopRecording : recordVideo} />
//       </View>
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
//     backgroundColor: "#fff",
//     alignSelf: "flex-end"
//   },
//   video: {
//     flex: 1,
//     alignSelf: "stretch"
//   }
// });

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
  // import { StyleSheet, Text, View, SafeAreaView, Button, Image , TouchableOpacity } from 'react-native';
  // import { useEffect, useRef, useState } from 'react';
  // import { Camera } from 'expo-camera';
  // import { shareAsync } from 'expo-sharing';
  // import * as MediaLibrary from 'expo-media-library';
  
  // export default function App() {
  //   let cameraRef = useRef();
  //   const [hasCameraPermission, setHasCameraPermission] = useState();
  //   const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  //   const [photo, setPhoto] = useState();
  //   const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  //   useEffect(() => {
  //     (async () => {
  //       const cameraPermission = await Camera.requestCameraPermissionsAsync();
  //       const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
  //       setHasCameraPermission(cameraPermission.status === "granted");
  //       setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
  //     })();
  //   }, []);
  //   const flipCamera = () => {
  //     setCameraType(
  //       cameraType === Camera.Constants.Type.back
  //         ? Camera.Constants.Type.front
  //         : Camera.Constants.Type.back
  //     );
  //   };
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
  //     <Camera style={styles.container} ref={cameraRef} type={cameraType}>
  //       <View style={styles.buttonContainer}>
  //         <Button title="Take Pic" onPress={takePic} />
  //       </View>
  //       <StatusBar style="auto" />

  //       <View style={styles.buttonContainer}>
  //         <TouchableOpacity style={styles.button} onPress={flipCamera}>
  //           <Text style={styles.text}>Flip Camera</Text>
  //         </TouchableOpacity>
  //         </View>
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
  