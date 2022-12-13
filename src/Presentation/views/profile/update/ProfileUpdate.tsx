import {
  View,
  Text,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { CustomTextInput } from "../../../components/CustomTextInput";
import { RoundedButton } from "../../../components/RoundedButton";
import { ProfileUpdateStyles } from "./Styles";
import useViewModel from "./ViewModel";
import { useEffect, useState } from "react";
import { ModalPickImage } from "../../../components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { MyColors } from "../../../theme/AppTheme";

interface IProps
  extends StackScreenProps<RootStackParamList, "ProfileUpdateScreen"> {}

export const ProfileUpdateScreen = ({ navigation, route }: IProps) => {
  const { user } = route.params;
  const {
    name,
    lastname,
    phone,
    image,
    onChange,
    update,
    errorMessage,
    successMessage,
    pickImage,
    takePhoto,
    loading,
  } = useViewModel(user);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage !== "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage !== "") {
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage]);

  return (
    <View style={ProfileUpdateStyles.container}>
      <Image
        source={require("../../../../../assets/city.jpg")}
        style={ProfileUpdateStyles.imageBackground}
      />

      <View style={ProfileUpdateStyles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          {image === "" ? (
            <Image
              source={{ uri: user?.image }}
              style={ProfileUpdateStyles.logoImage}
            />
          ) : (
            <Image
              source={{ uri: image }}
              style={ProfileUpdateStyles.logoImage}
            />
          )}
        </TouchableOpacity>

        <Text style={ProfileUpdateStyles.logoText}>Selecciona una imagen</Text>
      </View>

      <View style={ProfileUpdateStyles.form}>
        <ScrollView>
          <Text style={ProfileUpdateStyles.formText}>Actualizar</Text>

          <CustomTextInput
            image={require("../../../../../assets/user.png")}
            placeholder="Nombres"
            property="name"
            onChangeText={onChange}
            value={name}
          />

          <CustomTextInput
            image={require("../../../../../assets/my_user.png")}
            placeholder="Apellidos"
            property="lastname"
            onChangeText={onChange}
            value={lastname}
          />

          <CustomTextInput
            image={require("../../../../../assets/phone.png")}
            placeholder="Telefono"
            property="phone"
            keyboardType="numeric"
            onChangeText={onChange}
            value={phone}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton title="Confirmar" onPress={() => update()} />
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
          style={ProfileUpdateStyles.loading}
        />
      )}
    </View>
  );
};
