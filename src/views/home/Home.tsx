import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from "../../../App";

export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chef.jpg")}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/logo.png")} style={styles.logoImage} />
        <Text style={styles.logoText}>Delivery Food App</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText}>Ingresar</Text>

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

        <View style={{ marginTop: 30 }}>
          <RoundedButton
            title="Entrar"
            onPress={() => ToastAndroid.show("Hola!", ToastAndroid.SHORT)}
          />
        </View>

        <View style={styles.formRegister}>
          <Text>No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
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
