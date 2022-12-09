import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chef.jpg")}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/user_image.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Selecciona una imagen</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>Registrarse</Text>

        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Nombres"
            style={styles.formTextInput}
            keyboardType="default"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/my_user.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Apellidos"
            style={styles.formTextInput}
            keyboardType="default"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/email.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Correo electronico"
            style={styles.formTextInput}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/phone.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Telefono"
            style={styles.formTextInput}
            keyboardType="numeric"
            secureTextEntry
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/password.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.formTextInput}
            keyboardType="default"
            secureTextEntry
          />
        </View>
        <View style={styles.formInput}>
          <Image
            source={require("../../../assets/confirm_password.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Confirmar contraseña"
            style={styles.formTextInput}
            keyboardType="default"
            secureTextEntry
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            title="Confirmar"
            onPress={() => ToastAndroid.show("Hola!", ToastAndroid.SHORT)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: "5%",
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
    height: "70%",
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
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#aaaaaa",
    marginLeft: 15,
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
