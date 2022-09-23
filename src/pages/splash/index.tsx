import { View } from "react-native";
import Lottie from "lottie-react-native";
import { styles } from "./styles";
import splashAnimation from "./splashAnimation.json";

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Lottie
        source={splashAnimation}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate("Home")}
      />
    </View>
  );
}
