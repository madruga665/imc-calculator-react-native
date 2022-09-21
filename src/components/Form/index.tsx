import { View, TextInput } from "react-native";
import { styles } from "./styles";

export default function Form({height, setHeight, weight, setWeight}) {
  const heightMask = (value: string):string => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{1})(\d)/, '$1,$2')
    return value;
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType='number-pad'
        placeholder='Sua Altura ex: 1.82'
        placeholderTextColor='#7f8c8d'
        style={styles.input}
        value={height}
        onChangeText={(value) => setHeight(heightMask(value))}
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
