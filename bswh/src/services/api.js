import axios from "@axios"
import S from "@sanctuary"

// :: [URI] -> Promise e [PriceCheckResponse]
export const checkPrices = uris =>
  axios({ url: `/price-check?uris=${JSON.stringify(uris)}`, method: "GET" })
    .then(S.prop("data"))
    .catch(error => {
      console.log("price checker", error.response)
    })

export const getListingDetails = itemId =>
  axios({ url: `listing-detail?itemId=${itemId}`, method: "GET" })
    .then(S.prop("data"))
    .catch(error => {
      console.log("listing detail", error.response)
    })

export const getItemDetail = itemUri =>
  axios({ url: `item-detail?itemURI=${itemUri}`, method: "GET" })
    .then(S.prop("data"))
    .catch(error => {
      console.log("item detail", error.response)
    })

export const remoteReconcileLegacyAccount = legacyAccessToken => idToken =>
  axios({
    url: `/reconcile`,
    method: "POST",
    data: { legacyAccessToken, idToken },
  }).catch(error => {
    console.log("reconcile", error.response)
  })

export const saveSearch = token => payload =>
  axios({ url: `/save-search`, method: "POST", data: { token, payload } }).catch(error => {
    console.log("save search", error.response)
  })

export const subscribe = token => deviceToken =>
  axios({
    url: `/subscribe`,
    method: "POST",
    data: { accessToken: token, udid: deviceToken },
  }).catch(error => {
    console.log("subscriber", error.response)
  })

// :: DeviceUDID -> IDToken -> Promise e Unknown
export const unsubscribe = udid => token =>
  axios({ url: `/unsubscribe`, method: "POST", data: { token, udid } }).catch(error => {
    console.log(error.response)
  })

export const fetchFandomItems = uri =>
  axios({ url: `/get-fandom-items?uri=${uri}`, method: "GET" })
    .then(S.prop("data"))
    .then(
      S.map(
        ({
          name,
          category,
          listing_image_uri: listingImgUrl,
          metadata,
          price_value: value,
          price_value_in_pennies: value_in_pennies,
          uri,
        }) => ({
          name,
          category,
          listingImgUrl,
          metadata,
          uri,
          value,
          value_in_pennies,
        }),
      ),
    )
    .catch(error => {
      console.log("get fandom", error.response)
    })
