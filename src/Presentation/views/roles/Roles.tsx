import { Dimensions, FlatList, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import { RolesItem } from "./Item";
import useViewModel from "./ViewModel";
import { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from "../../../../App";

interface IProps
  extends StackScreenProps<RootStackParamList, "RolesScreen"> {}

export const RolesScreen = ({ navigation, route }: IProps) => {
  const { user } = useViewModel();
  const { width, height } = Dimensions.get("window");
  const [mode, setMode] = useState<any>('horizontal-stack')
  const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left')

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View>
        <Carousel
          loop={false}
          width={width}
          height={height / 2}
          autoPlay={false}
          data={user?.roles!}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <RolesItem rol={item} width={width - 100} height={420} navigation={navigation} />
          )}
          modeConfig={{
            snapDirection,
            stackInterval: 30
          }}
          mode={mode}
        />
      </View>
    </GestureHandlerRootView>
  );
};
