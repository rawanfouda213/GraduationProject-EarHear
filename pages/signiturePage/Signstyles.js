import { StyleSheet } from "react-native";
import { windowWidth, windowHeight } from "./Signiturepage";
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "black",
  },
  avatarView: {
    flex: 2,
    // backgroundColor:'black'
  },
  textView: {
    flex: 0.8,
    backgroundColor: "#e8e8e8",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textInputStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 52,
    borderRadius: 20,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
  },
  button: {
    marginLeft: "15%",
  },
  aslImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
  },
  imageControls: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  }
});
