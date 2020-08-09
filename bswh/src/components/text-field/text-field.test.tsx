/** @jest-environment jsdom  */
import * as React from "react"
import { mount } from "enzyme"
import { TextField } from "./text-field"
import { TextInput } from "react-native"

describe("placeholder", () => {
  test("default has no placeholder", () => {
    expect(
      mount(<TextField preset="dark" />)
        .find(TextInput)
        .prop("placeholder"),
    ).toBeUndefined()
  })
  test("sets a literal placeholder", () => {
    expect(
      mount(<TextField preset="dark" placeholder="placeholder value" />)
        .find(TextInput)
        .prop("placeholder"),
    ).toEqual("placeholder value")
  })
  test("lower cases the value", () => {
    expect(
      mount(<TextField preset="dark" placeholder="Placeholder Value" />)
        .find(TextInput)
        .prop("placeholder"),
    ).toEqual("Placeholder Value")
  })
})
//
// describe("clearButtonMode", () => {
//   it("is set", () => {
//     expect(
//       mount(<TextField preset="dark" />)
//         .find(TextInput)
//         .prop("clearButtonMode"),
//     ).toEqual("while-editing")
//   })
// })
//
// describe("textBreakStrategy", () => {
//   it("is set", () => {
//     expect(
//       mount(<TextField preset="dark" />)
//         .find(TextInput)
//         .prop("textBreakStrategy"),
//     ).toEqual("highQuality")
//   })
// })
//
// describe("forwardedRef", () => {
//   xit("passes the forwardedRef prop into the ref prop of the TextInput", () => {})
// })
