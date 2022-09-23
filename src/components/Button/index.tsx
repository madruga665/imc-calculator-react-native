import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface IButton {
  calculateIMC: () => void
}

export default function Button({ calculateIMC }: IButton) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
      ]}
      onPress={calculateIMC}
    >
      <Text style={styles.buttonText}>CALCULAR</Text>
    </Pressable>
  );
}
