export const removeString = (value: string) => {
  return Number(value.replaceAll(/[^0-9]/g, "")) || 0;
};
