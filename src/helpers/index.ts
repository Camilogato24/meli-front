export const formatPrice = (
  amount: number | undefined,
  decimals: number | undefined
) => {
  const total = (amount || 0) + (decimals || 0 / 100);
  return total.toLocaleString("es-AR");
};
