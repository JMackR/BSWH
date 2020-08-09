import NumArray, { INVALID_STD_DEV_ARRAY_MSG } from "./math-engine"

describe("NumArray Helper Class", () => {
  const oddNumScrambledArrayData = [3, 1, 2]
  const oddNumSortedAscArrayData = [1, 2, 3]
  const evenNumArrayData = [1, 2]

  afterEach(() => {
    // console.error.mockClear();
  })

  // console.error = jest.fn();

  it(`Should not throw error message when passing a single number value array`, () => {
    // Standard deviation requires at least 2 numbers, though
    expect(() => new NumArray([1])).not.toThrow()
  })

  it(`Should sort the number array from lowest number to highest number`, () => {
    const numArray = new NumArray(oddNumScrambledArrayData)
    expect(numArray.SortedAsc()).toEqual(oddNumSortedAscArrayData)
  })

  it(`Should assert that an array with an odd number of elements does not have an even length`, () => {
    const numArray = new NumArray(oddNumScrambledArrayData)
    expect(numArray.LengthIsEven).toBe(false)
  })

  it(`Should assert that an array with an even number of elements does have an even length`, () => {
    const numArray = new NumArray(evenNumArrayData)
    expect(numArray.LengthIsEven).toBe(true)
  })

  it(`Should assert the mid index of an array is correct`, () => {
    const numArray = new NumArray(oddNumScrambledArrayData)
    expect(numArray.MiddleIndex).toBe(2)
  })

  it(`Should assert the mid index value of an odd length array is correct`, () => {
    const numArray = new NumArray(oddNumScrambledArrayData)
    expect(numArray.MiddleIndexValue).toBe(3)
  })

  it(`Should assert the mid index value of an even length array is correct`, () => {
    const numArray = new NumArray(evenNumArrayData)
    expect(numArray.MiddleIndexValue).toBe(2)
  })

  it(`Should assert the mid index value of an odd length array is correct`, () => {
    const numArray = new NumArray(oddNumSortedAscArrayData)
    expect(numArray.MiddleIndexValue).toBe(3)
  })

  it(`Should assert the mid index value minus 1 of an odd length array is correct`, () => {
    const numArray = new NumArray(oddNumSortedAscArrayData)
    expect(numArray.MiddleIndexOffsetMinusOneValue).toBe(2)
  })

  it(`Should assert the mid index value minus 1 of an even length array is correct`, () => {
    const numArray = new NumArray(evenNumArrayData)
    expect(numArray.MiddleIndexOffsetMinusOneValue).toBe(1)
  })

  it("Should assert that the Median for a single element number array will return that number", () => {
    const numArray = new NumArray([1])
    expect(numArray.Median()).toEqual(1)
  })

  it(`Should assert that the Median of the even length array is correct`, () => {
    const numArray = new NumArray(evenNumArrayData)
    expect(numArray.Median()).toEqual(1.5)
  })

  it(`Should assert that the Median of the odd length array is correct`, () => {
    const numArray = new NumArray(oddNumScrambledArrayData)
    expect(numArray.Median()).toEqual(2)
  })

  it("Should assert that the Mean for a single element number array will return that number", () => {
    const numArray = new NumArray([1])
    expect(numArray.Mean()).toEqual(1)
  })

  it(`Should assert that the Mean of the array is correct`, () => {
    const numArray = new NumArray(evenNumArrayData)
    expect(numArray.Mean()).toEqual(1.5)
  })

  it("Should assert that the Mode for a single element number array will return an array with the same number", () => {
    const numArray = new NumArray([1])
    expect(numArray.Mode()).toEqual([1])
  })

  it(`Should throw error message \"${INVALID_STD_DEV_ARRAY_MSG}\" when get Standard Deviation for a single element number array`, () => {
    const numArray = new NumArray([1])
    expect(() => numArray.StdDeviation()).toThrowError(INVALID_STD_DEV_ARRAY_MSG)
  })

  it(`Should assert that the Standard Deviation of the array is correct`, () => {
    const numArray = new NumArray(evenNumArrayData)
    expect(numArray.StdDeviation()).toEqual(0.70710678)
  })

  it(`Should assert that the Mode of the array is correct`, () => {
    const numArray = new NumArray(evenNumArrayData)
    expect(numArray.Mode()).toEqual([1, 2])
  })
})
