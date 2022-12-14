import { View } from "react-native";
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";

interface IForm {
  height: string;
  weight: string;
  setHeight: (value: string) => void;
  setWeight: (value: string) => void;
}

const Form: React.FC<IForm> = ({ height, weight, setHeight, setWeight }) => {
  return (
    <View style={styles.container}>
      <TextInputMask
        type='custom'
        options={{
          mask: "9,99",
        }}
        keyboardType='numeric'
        placeholder='Sua Altura ex: 1,82'
        placeholderTextColor='#7f8c8d'
        style={styles.input}
        value={height}
        onChangeText={(value) => setHeight(value)}
      />
      <TextInputMask
        type='custom'
        options={{
          mask: "99,999",
        }}
        keyboardType='numeric'
        placeholder='Seu Peso'
        placeholderTextColor='#7f8c8d'
        style={styles.input}
        value={weight}
        onChangeText={(value) => setWeight(value)}
      />
    </View>
  );
};

export default Form;
