import { StyleSheet } from "react-native";
import {windowWidth ,windowHeight } from "./Signiturepage";
export const styles  = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
   },
   avatarView:{
    flex:2,
    // backgroundColor:'black'
   },
   textView:{
    flex:0.8,
     backgroundColor:'#e8e8e8', 
     borderTopRightRadius:20, 
    borderTopLeftRadius:20
   },
    textInputStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 48,
      borderRadius: 20,
      paddingHorizontal: 16,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      elevation: 2,
      shadowOpacity: 0.4
    }
});