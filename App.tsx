import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
      <View style={styles.buttonContainer}>

      </View>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    height: 160,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c3e50",
  },
});
