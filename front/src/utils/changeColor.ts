type TypeColor = 'hex' | 'class'

export const tempColorAssing = (level: number, type: TypeColor) => {
  switch (level) {
    case 1:
      return type == 'hex'? "#B91C1C" : "red-700"
    case 2:
      return type == 'hex'? "#FB923C" : "orange-400"  
    case 3:
      return type == 'hex'? "#EAB308" : "yellow-500"
    case 4:
      return type == 'hex'? "#9A3412" : "orange-800"
    case 5:
      return type == 'hex'? "#255DEB" : "blue"
    default:
      return type == 'hex'? "#FFFFFF" : "white"
  }
}
