export default (temperature, currentUnit = 'metric') => {
  // °C -> °F
  if (currentUnit === 'imperial') {
    return (temperature * 9) / 5 + 32
  }

  // °F -> °C
  const conversion = ((temperature - 32) * 5) / 9
  return conversion.toPrecision(4)
}
