import { StyleSheet } from 'react-native';

export const ProfileUpdateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
    bottom: "30%",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    top: "8%",
  },
  logoImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2
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
    height: "45%",
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
  loading: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0
  }
});