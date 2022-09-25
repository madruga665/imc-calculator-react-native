import { render, screen } from "@testing-library/react-native";
import Header from "../../../components/Header";

describe("Header component tests", () => {
  test("if the component have a title text", () => {
    render(<Header />);
    const title = screen.getByText("Super Calculadora de IMC");

    expect(title).toBeTruthy();
  });
});
