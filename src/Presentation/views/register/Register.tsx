import {
  View,
  Text,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { CustomTextInput } from "../../components/CustomTextInput";
import { RoundedButton } from "../../components/RoundedButton";
import { RegisterStyles } from "./Styles";
import useViewModel from "./ViewModel";
import { useEffect, useState } from "react";
import { ModalPickImage } from "../../components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { MyColors } from "../../theme/AppTheme";

interface IProps
  extends StackScreenProps<RootStackParamList, "RegisterScreen"> {}

export const RegisterScreen = ({ navigation, route }: IProps) => {
  const {
    name,
    lastname,
    email,
    phone,
    image,
    password,
    confirmPassword,
    onChange,
    register,
    errorMessage,
    pickImage,
    takePhoto,
    user,
    loading,
  } = useViewModel();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace("ClientTabsNavigator");
    }
  }, [user]);

  return (
    <View style={RegisterStyles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={RegisterStyles.imageBackground}
      />

      <View style={RegisterStyles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          {image === "" ? (
            <Image
              source={require("../../../../assets/user_image.png")}
              style={RegisterStyles.logoImage}
            />
          ) : (
            <Image source={{ uri: image }} style={RegisterStyles.logoImage} />
          )}
        </TouchableOpacity>

        <Text style={RegisterStyles.logoText}>Selecciona una imagen</Text>
      </View>

      <View style={RegisterStyles.form}>
        <ScrollView>
          <Text style={RegisterStyles.formText}>Registrarse</Text>

          <CustomTextInput
            image={require("../../../../assets/user.png")}
            placeholder="Nombres"
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomTextInput
            image={require("../../../../assets/my_user.png")}
            placeholder="Apellidos"
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />

          <CustomTextInput
            image={require("../../../../assets/email.png")}
            placeholder="Correo electronico"
            property="email"
            keyboardType="email-address"
            onChangeText={onChange}
            value={email}
          />

          <CustomTextInput
            image={require("../../../../assets/phone.png")}
            placeholder="Telefono"
            property="phone"
            keyboardType="numeric"
            onChangeText={onChange}
            value={phone}
          />

          <CustomTextInput
            image={require("../../../../assets/password.png")}
            placeholder="Contraseña"
            property="password"
            onChangeText={onChange}
            value={password}
            secureTextEntry
          />

          <CustomTextInput
            image={require("../../../../assets/confirm_password.png")}
            placeholder="Confirmar contraseña"
            property="confirmPassword"
            onChangeText={onChange}
            value={confirmPassword}
            secureTextEntry
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton title="Confirmar" onPress={register} />
          </View>
        </ScrollView>
      </View>
      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />
      {loading && (
        <ActivityIndicator
          size="large"
          color={MyColors.primary}
          style={RegisterStyles.loading}
        />
      )}
    </View>
  );
};
