import { numberValidation } from ".."

describe("Utils tests", () => {
  afterEach(() => {
    console.error.mockClear()
  })

  console.error = jest.fn()

  it(`stripNonDigit: Assert that any non-number is removed from the value`, () => {
    expect(numberValidation("foo")).toEqual("")
  })

  it(`stripNonDigit: Assert that any number is not removed from the value`, () => {
    expect(numberValidation(1)).toEqual(1)
  })

  it(`stripNonDigit: Assert that any string number is returned as the same string number`, () => {
    expect(numberValidation("1")).toEqual("1")
  })
})
