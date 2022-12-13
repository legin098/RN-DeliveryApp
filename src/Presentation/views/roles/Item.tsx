import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRol } from "../../../Domain/entities/Rol";
import { MyColors } from "../../theme/AppTheme";
import { RootStackParamList } from "../../../../App";

interface IProps {
  rol: IRol;
  height: number;
  width: number;
  navigation: StackNavigationProp<RootStackParamList, "RolesScreen", undefined>;
}

export const RolesItem = ({ rol, height, width, navigation }: IProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (rol.name === "ADMIN") {
          navigation.replace("AdminTabsNavigator");
        } else if (rol.name === "REPARTIDOR") {
          navigation.replace("ClientTabsNavigator");
        }
      }}
      style={{ ...styles.container, width: width, height: height }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: rol.image }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{rol.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 18,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  titleContainer: {
    height: 50,
    backgroundColor: MyColors.primary,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
