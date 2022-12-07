type TypeColor = 'hex' | 'class';

export const tempColorAssing = (level: number, type: TypeColor) => {
  switch (level) {
    case 0:
      return type == 'hex' ? '#8492a6' : 'secondary-regular';
    case 1:
      return type == 'hex' ? '#F5B7B1' : 'scale1';
    case 2:
      return type == 'hex' ? '#F1948A' : 'scale2';
    case 3:
      return type == 'hex' ? '#EC7063' : 'scale3';
    case 4:
      return type == 'hex' ? '#E74C3C' : 'scale4';
    case 5:
      return type == 'hex' ? '#CB4335' : 'scale5';
    default:
      return type == 'hex' ? '#00000' : 'black';
  }
};
