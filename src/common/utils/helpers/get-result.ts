export const getResult = (operation: string, rememberedValue: string, inputValue: string) => {
  switch (operation) {
    case '+':
      return Number(rememberedValue) + Number(inputValue)
    case '-':
      return Number(rememberedValue) - Number(inputValue)
    case 'x':
      return Number(rememberedValue) * Number(inputValue)
    case '/': {
      if (inputValue.toString() !== '0') {
        return Number(rememberedValue) / Number(inputValue)
      } else return 'не определено'
    }
    default:
      return 0
  }
}