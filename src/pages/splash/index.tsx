import { View } from "react-native";
import Lottie from "lottie-react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";

export default function Splash() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Lottie
        source={require("./splashAnimation.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate("Home" as never)}
      />
    </View>
  );
}
