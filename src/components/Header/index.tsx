import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.title}>Super Calculadora de IMC</Text>
    </SafeAreaView>
  );
}
