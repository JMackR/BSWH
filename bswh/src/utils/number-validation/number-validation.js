export const numberValidation = (value) => {
  if (typeof value === "number" && !isNaN(value)) return value
  return value.toString().replace(/[^\d]/gi, "")
}
