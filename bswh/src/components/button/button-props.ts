export interface ButtonProps {
  /**
   * Handler to be called when the user taps the button
   */
  onClick: () => void;
  title: string;
  subtitle: string;
  onLongClick?: () => void;
}
