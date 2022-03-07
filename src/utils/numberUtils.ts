const frenchFormatter = new Intl.NumberFormat('fr-FR');

export const numberFormater = (value: number) => frenchFormatter.format(value);
