import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export default function index() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>CALCULAR</Text>
    </Pressable>
  );
}
