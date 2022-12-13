import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
    width: 100,
    height: 100,
  },
  logoText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
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
  formText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "orange",
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    marginLeft: 10,
  },
});
