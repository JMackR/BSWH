/**
 * Font family definitions
 */
export enum typography {
  /** The primary font.  Used in most places. */
  primary = "Poppins",
  /** Highly-stylized font used sparingly for branding */
  brand = "Poppins",
}

/**
 * Font weights
 */

export enum weight {
  regular = "Regular",
  regularItalic = "RegularItalic",
  medium = "Medium",
  semibold = "Semibold",
  bold = "Bold",
  boldItalic = "BoldItalic",
  extrabold = "Extrabold",
  light = "Light",
}

export function fontFamily(fontFamily: typography, weight: weight): string {
  return `${fontFamily}-${weight}`
}
