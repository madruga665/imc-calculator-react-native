export const imcMessage = (imcResult: number): string => {
  if (imcResult > 16 && imcResult < 17) {
    return "Muito abaixo do peso";
  }

  if (imcResult >= 17 && imcResult < 18.5) {
    return "Abaixo do peso";
  }

  if (imcResult >= 18.5 && imcResult < 25) {
    return "Peso ideal";
  }

  if (imcResult >= 25 && imcResult < 30) {
    return "Acima do peso";
  }

  if (imcResult >= 30 && imcResult < 35) {
    return "Obesidade I";
  }

  if (imcResult >= 35 && imcResult < 40) {
    return "Obesidade II (severa)";
  }

  if (imcResult >= 40) {
    return "Obesidade III (mórbida)";
  }

  return "inválido";
};
