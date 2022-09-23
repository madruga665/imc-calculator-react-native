import { View, Alert, BackHandler } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { imcMessage } from "../../../helpers/imcMessage";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Button from "../../components/Button";

export default function Home() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);

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
    </View>
  );
}
