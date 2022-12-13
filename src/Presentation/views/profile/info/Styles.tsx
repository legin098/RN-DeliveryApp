import { StyleSheet } from "react-native";

export const ProfileInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  logout: {
    position: 'absolute',
    top: 35,
    right: 15
  },
  logoutImage:{
    width: 40,
    height: 40,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    top: "15%",
  },
  logoImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 2
  },
  form: {
    backgroundColor: "#fff",
    width: "100%",
    height: "40%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopEndRadius: 40,
    padding: 30,
  },
  formInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  formImage: {
    height: 30,
    width: 30
  },
  formContent: {
    marginLeft: 15
  },
  formTextDescription: {
    fontSize: 12,
    color: 'gray'
  }
});
