export function removeNaN(value: string) {
  const replacedValue = value.replace(/[^0-9]/g, '');
  return replacedValue;
}
