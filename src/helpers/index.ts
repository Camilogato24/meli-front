export const formatPrice = (
  amount: number | undefined,
  decimals: number | undefined
) => {
  const total = (amount || 0) + (decimals || 0 / 100);
  return total.toLocaleString("es-AR");
};


export const formatPriceDetail = (amount: number | undefined) => {
  return amount?.toLocaleString("es-AR");
};


export const formatDecimals = (decimals: number | undefined): string => {
  if (decimals === undefined || decimals === null) {
    return "00"; 
  }
  const formattedDecimals = decimals < 10 ? `0${decimals}` : decimals.toString();
  return formattedDecimals;
}