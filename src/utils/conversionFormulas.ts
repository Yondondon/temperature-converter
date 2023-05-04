export const celsiusToKelvin = (value: number) => {
  return Number(value + 273.15).toFixed(2);
}

export const kelvinToCelsius = (value: number) => {
  return Number(value - 273.15).toFixed(2);
}

export const fahrenheitToCelsius = (value: number) => {
  return Number((value - 32) * (5/9)).toFixed(2);
}

export const celsiusToFahrenheit = (value: number) => {
  return Number(value * (9/5) + 32).toFixed(2);
}

export const fahrenheitToKelvin = (value: number) => {
  return Number((value - 32) * (5/9) + 273.15).toFixed(2);
}

export const kelvinToFahrenheit = (value: number) => {
  return Number((value - 273.15) * (9/5) + 32).toFixed(2);
}