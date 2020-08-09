/** @jest-environment jsdom */
import * as React from "react"
import { Button } from "./button"
import { mount } from "enzyme"
import { GestureResponderEvent, TouchableHighlight, TouchableOpacity, ViewStyle } from "react-native"
import { mocked } from "ts-jest/utils"
import { color } from "../../theme"

describe("onPress", () => {
  it("forwards the press", () => {
    const onPress = jest.fn()
    const wrapper = mount(<Button onPress={onPress} />)
    const touchablePress = wrapper.find(TouchableOpacity).prop("onPress")
    const event = mocked({}) as GestureResponderEvent
    touchablePress!(event)
    expect(onPress).toHaveBeenCalledWith(event)
  })
  it("does nothing if onPress is not set", () => {
    const wrapper = mount(<Button />)
    wrapper.find(TouchableOpacity).prop("onPress")!(mocked({}) as GestureResponderEvent)
  })
})
describe("disabled", () => {
  it("is not disabled by default", () => {
    const wrapper = mount(<Button />)
    expect(wrapper.find(TouchableOpacity).prop("disabled")).toBeFalsy()
  })
  it("disables the touchable", () => {
    const wrapper = mount(<Button disabled />)
    expect(wrapper.find(TouchableOpacity).prop("disabled")).toBeTruthy()
  })
})

describe("selected", () => {
  it("disables the touchable", () => {
    const wrapper = mount(<Button selected />)
    expect(wrapper.find(TouchableOpacity).prop("disabled")).toBeTruthy()
  })
  describe("allowUnselect", () => {
    it("is enabled", () => {
      const wrapper = mount(<Button selected allowUnselect />)
      expect(wrapper.find(TouchableOpacity).prop("disabled")).toBeFalsy()
    })
    it("is disabled if prop set", () => {
      const wrapper = mount(<Button selected allowUnselect disabled />)
      expect(wrapper.find(TouchableOpacity).prop("disabled")).toBeTruthy()
    })
  })
})

describe("underlay", () => {
  it("updates showUnderlay on onShowUnderlay", () => {
    const wrapper = mount(<Button preset="dark" />)
    wrapper.find(TouchableHighlight).props().onShowUnderlay!()
    wrapper.update()
    expect((wrapper.find(TouchableHighlight).props().style as ViewStyle).borderColor).toEqual(color.transparent)
  })
  it("updates showUnderlay on onHideUnderlay", () => {
    const wrapper = mount(<Button preset="secondary" />)
    wrapper.find(TouchableHighlight).props().onHideUnderlay!()
    wrapper.update()
    expect((wrapper.find(TouchableHighlight).props().style as ViewStyle).borderColor).toEqual(color.border)
  })
})
