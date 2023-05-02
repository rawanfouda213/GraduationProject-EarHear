import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 30,
    marginTop: "3%",
    color: "#034b6e",
    fontWeight: "bold",
  },
  contentContainer: {
    top: "35%",
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 220,
  },
  logoContainer: {
    flexDirection: "row",
  },
});
