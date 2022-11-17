export const tempColorAssing = (level: number) => {
  switch (level) {
    case 1:
      return "red-700"
    case 2:
      return "orange-400"
    case 3:
      return "yellow-500"
    case 4:
      return "orange-800"
    case 5:
      return "blue-600"
    default:
      return "[#FFFFFF]"
  }
}
