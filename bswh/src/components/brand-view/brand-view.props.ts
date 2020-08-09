import React from "react"
import { LocalizationKey } from "../../i18n/i18n"

export interface BrandViewProps {
  /** Children preview-components. */
  children?: React.ReactNode
  /** Customize close text */
  closeTextKey?: LocalizationKey
}
