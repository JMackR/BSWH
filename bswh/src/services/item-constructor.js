import R from "ramda"

export const Item = function(__item) {
  this.__item = __item
}

Item.prototype = {
  get isFandom() {
    return Boolean(this.__item.isFandom)
  },
  get item_number() {
    return this.__item.item_number
  },
  get name() {
    return this.__item.name
  },
  get uri() {
    return this.__item.uri
  },
  get value() {
    return this.__item.value
  },
  get value_in_pennies() {
    return this.__item.valueInPennies || this.__item.value_in_pennies
  },
}

Item.prototype.toJSON = function Item$toJSON() {
  return {
    item_number: this.__item.item_number,
    name: this.__item.name,
    uri: this.__item.uri,
    value: this.__item.value,
    value_in_pennies: this.__item.value_in_pennies,
  }
}

Item.validate = R.allPass([
  R.has("name"),
  R.has("uri"),
  R.either(R.has("valueInPennies"), R.has("value_in_pennies")),
])
