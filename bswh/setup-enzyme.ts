import "react-native"
import "jest-enzyme"
import Adapter from "enzyme-adapter-react-16"
import Enzyme from "enzyme"

// This is ridiculous! https://github.com/airbnb/enzyme/issues/831#issuecomment-490644160
const originalConsoleError = console.error
console.error = (message: string) => {
  if (message.toString().startsWith("Warning: ")) {
    return
  }
  originalConsoleError(message)
}

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() })
