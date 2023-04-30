import React from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
 TextInput,
 TouchableOpacity
  
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { styles } from './Signstyles';
import { Ionicons } from '@expo/vector-icons'; 
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
const windowDimensions = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const  Signiturepage = () => {
  const navigation = useNavigation();
    // const tabs = [
    //     {
    //       name: 'Voice',
    //       activeIcon: <FontAwesome name="microphone" size={24} color="#034b6e" />,
    //       inactiveIcon: <FontAwesome name="microphone" size={24} color="#e8e8e8" />
    //     },
    //     {
    //       name: 'Camera',
    //       activeIcon: <Entypo name="camera" size={24} color="#034b6e" />,
    //       inactiveIcon: <Entypo name="camera" size={24} color="#e8e8e8" />
    //     },
    //     {
    //       name: 'Learn',
    //       activeIcon: <Ionicons name="book-sharp" size={24} color="#034b6e" />,
    //       inactiveIcon: <Ionicons name="book-sharp" size={24} color="#e8e8e8" />
    //     },
      
      
    //   ];
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarView}>
        
      </View>
      <View style={styles.textView}>
        <View style={styles.textInputStyle}>
        <TextInput
      
        multiline
        // value={result}
        placeholder="Type to translate"
        style={{ flex: 1 }}
        //onChangeText={text => setResult(text)}
        />
        <TouchableOpacity>
        
         <FontAwesome name="microphone" size={24} color="#034b6e" />
         </TouchableOpacity>
      </View>
      {/* <Tabbar
      style={{height:20}}
    tabs={tabs}
    tabBarContainerBackground='#034b6e'
  
    tabBarBackground='#e8e8e8'
    activeTabBackground='#aaaa'
    labelStyle={{ color: '#aaa', fontWeight: '600', fontSize: 14  }}
    onTabChange={() => console.log('Tab changed')}
  /> */}
      </View>
    </SafeAreaView>
    </>
  );
};
 export default Signiturepage;

  // import { StatusBar } from 'expo-status-bar';
  // import React from 'react';
  // import { Button, StyleSheet, Text, View } from 'react-native';
  // import { Audio } from 'expo-av';
  // import * as Sharing from 'expo-sharing';
  
  // const  Signiturepage = () => {
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
  //     backgroundColor: '#e8e8e8',
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
  
  // export default Signiturepage;

