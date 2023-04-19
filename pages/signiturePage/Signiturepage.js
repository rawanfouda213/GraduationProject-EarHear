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

