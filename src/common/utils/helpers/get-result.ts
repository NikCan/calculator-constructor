export const getResult = (operation: string, rememberedValue: string, inputValue: string) => {
  const number1 = +rememberedValue
  const number2 = +inputValue
  switch (operation) {
    case '+':
      return number1 + number2
    case '-':
      return number1 - number2
    case 'x':
      return number1 * number2
    case '/': {
      if (number2 !== 0) {
        return number1 / number2
      } else return 'не определено'
    }
    default:
      return 0
  }
}