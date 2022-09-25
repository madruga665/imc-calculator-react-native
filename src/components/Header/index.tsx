import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

const Header: React.FC = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.title}>Super Calculadora de IMC</Text>
    </SafeAreaView>
  );
};

export default Header;
