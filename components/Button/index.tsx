import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export default function Button({ calculateIMC }) {
  return (
    <Pressable style={styles.button} onPress={calculateIMC}>
      <Text style={styles.buttonText}>CALCULAR</Text>
    </Pressable>
  );
}
