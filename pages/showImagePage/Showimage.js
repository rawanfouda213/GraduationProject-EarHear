import React from 'react';
import {StyleSheet, Image, Button, View} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"
export default function ShowImagepage() {
    const navigation = useNavigation();
    const route = useRoute()
    const res = route.params?.res
    return(    <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: `data:image/png;base64,${res}`}}
        />
        <Button
        width={10}
        title="Go back"
        backgroundColor={"#034b6e"}
        textSize={20}
        progress
        onPress={() => {
          navigation.navigate("Camerapage");
        }}
        />
      </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  });