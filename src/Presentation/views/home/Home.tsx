import { Image, Text, View, ToastAndroid } from "react-native";
import { TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { RoundedButton } from "../../components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import { HomeStyles } from "./Styles";
import { useEffect } from "react";

interface IProps extends StackScreenProps<RootStackParamList, "HomeScreen"> {}

export const HomeScreen = ({ navigation, route }: IProps) => {
  const { email, password, onChange, login, errorMessage, user } =
    useViewModel();

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined && user?.id !== '') {
      if(user.roles?.length! > 1) {
        navigation.replace('RolesScreen')
      }else {
        navigation.replace("ClientTabsNavigator");
      }
    }
  }, [user]);

  return (
    <View style={HomeStyles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={HomeStyles.imageBackground}
      />

      <View style={HomeStyles.logoContainer}>
        <Image
          source={require("../../../../assets/delivery.png")}
          style={HomeStyles.logoImage}
        />
        <Text style={HomeStyles.logoText}>Delivery Food App</Text>
      </View>

      <View style={HomeStyles.form}>
        <Text style={HomeStyles.formText}>Ingresar</Text>

        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Correo electronico"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}
        />

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton title="Entrar" onPress={() => login()} />
        </View>

        <View style={HomeStyles.formRegister}>
          <Text>No tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={HomeStyles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
