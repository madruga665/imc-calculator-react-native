import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./components/Header";
import Form from "./components/Form";
import Button from "./components/Button";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
      <View style={styles.buttonContainer}>
        <Button />
      </View>
      <StatusBar style='light' />
    </View>
  );
}
