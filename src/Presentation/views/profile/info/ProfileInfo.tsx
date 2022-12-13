import { Text, View, Image, TouchableOpacity } from "react-native";
import useViewModel from "./ViewModel";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { ProfileInfoStyles } from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { RoundedButton } from "../../../components/RoundedButton";
import { useEffect } from "react";

export const ProfileInfoScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { removeUserSession, user } = useViewModel();

  useEffect(() => {
    if (user.id === "") {
      navigation.replace("HomeScreen");
    }
  }, [user]);

  return (
    <View style={ProfileInfoStyles.container}>
      <Image
        source={require("../../../../../assets/city.jpg")}
        style={ProfileInfoStyles.imageBackground}
      />

      <TouchableOpacity
        style={ProfileInfoStyles.logout}
        onPress={() => {
          removeUserSession();
        }}
      >
        <Image
          source={require("../../../../../assets/logout.png")}
          style={ProfileInfoStyles.logoutImage}
        />
      </TouchableOpacity>

      <View style={ProfileInfoStyles.logoContainer}>
        {user.image !== "" && (
          <Image
            source={{ uri: user?.image }}
            style={ProfileInfoStyles.logoImage}
          />
        )}
      </View>

      <View style={ProfileInfoStyles.form}>
        <View style={ProfileInfoStyles.formInfo}>
          <Image
            source={require("../../../../../assets/user.png")}
            style={ProfileInfoStyles.formImage}
          />
          <View style={ProfileInfoStyles.formContent}>
            <Text>
              {user?.name} {user?.lastname}
            </Text>
            <Text style={ProfileInfoStyles.formTextDescription}>
              Nombre de usuario
            </Text>
          </View>
        </View>

        <View style={{ ...ProfileInfoStyles.formInfo, marginTop: 25 }}>
          <Image
            source={require("../../../../../assets/email.png")}
            style={ProfileInfoStyles.formImage}
          />
          <View style={ProfileInfoStyles.formContent}>
            <Text>{user?.email}</Text>
            <Text style={ProfileInfoStyles.formTextDescription}>
              Correo electronico
            </Text>
          </View>
        </View>

        <View
          style={{
            ...ProfileInfoStyles.formInfo,
            marginTop: 25,
            marginBottom: 60,
          }}
        >
          <Image
            source={require("../../../../../assets/phone.png")}
            style={ProfileInfoStyles.formImage}
          />
          <View style={ProfileInfoStyles.formContent}>
            <Text>{user?.phone}</Text>
            <Text style={ProfileInfoStyles.formTextDescription}>Telefono</Text>
          </View>
        </View>

        <RoundedButton
          onPress={() => {
            navigation.navigate("ProfileUpdateScreen", { user: user! });
          }}
          title="Actualizar informacion"
        />
      </View>
    </View>
  );
};

{
  /* <Button title="Cerrar sesion" onPress={() => {
        removeSession()
        navigation.navigate('HomeScreen')
      }}/> */
}
