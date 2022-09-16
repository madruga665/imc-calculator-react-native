import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export default function Button() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>CALCULAR</Text>
    </Pressable>
  );
}
