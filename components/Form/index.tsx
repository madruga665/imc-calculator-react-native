import { View, TextInput } from "react-native";
import { styles } from "./styles";

export default function Form({height, setHeight, weight, setWeight}) {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType='number-pad'
        placeholder='Sua Altura ex: 1.82'
        placeholderTextColor='#7f8c8d'
        style={styles.input}
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        keyboardType='numeric'
        placeholder='Seu Peso'
        placeholderTextColor='#7f8c8d'
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
      />
    </View>
  );
}
