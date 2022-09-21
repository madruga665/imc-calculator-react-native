import { StatusBar } from "expo-status-bar";
import { Alert, View } from "react-native";
import Header from "./src/components/Header";
import Form from "./src/components/Form";
import Button from "./src/components/Button";
import { styles } from "./styles";
import { useState } from "react";
import { imcMessage } from "./helpers/imcMessage";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const calculateIMC = (): void => {
    const heightToNumber = Number(height.replace(",", "."));
    const weightToNumber = Number(weight.replace(",", "."));

    const imc = weightToNumber / (heightToNumber * heightToNumber);
    const roundImc = Math.round(imc * 100) / 100;

    Alert.alert(`Seu imc é: ${roundImc}`, imcMessage(roundImc));

    setHeight("");
    setWeight("");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Form height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} />
      <View style={styles.buttonContainer}>
        <Button calculateIMC={calculateIMC} />
      </View>
      <StatusBar style='light' />
    </View>
  );
}
