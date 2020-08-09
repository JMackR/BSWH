export const createUserInfo = () => {
  const that = {}
  that.username = ""
  that.email = ""
  that.user_uid = ""
  that.ship_to_country = ""
  that.ship_to_zipcode = ""
  that.agreed_to_terms = ""
  that.mailer = ""
  that.show_price_total = ""
  that.currency = ""
  return that
}
export default createUserInfo
