import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface IButton {
  calculateIMC: () => void;
}

const Button: React.FC<IButton> = ({ calculateIMC }) => {
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
};

export default Button;
