import { View, TextInput } from "react-native";
import { styles } from "./styles";

export default function Form() {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType='numeric'
        placeholder='Sua Altura em cm'
        placeholderTextColor='#7f8c8d'
        style={styles.input}
      />
      <TextInput
        keyboardType='numeric'
        placeholder='Seu Peso em kg'
        placeholderTextColor='#7f8c8d'
        style={styles.input}
      />
    </View>
  );
}
