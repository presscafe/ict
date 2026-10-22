/* Public-safe runtime contact configuration.
   Override WHATSAPP_NUMBER (digits only, e.g. "2677XXXXXXX") and EMAIL in Cloudflare Pages
   or local deployment prior to live domain cutover. */
window.BDB_CONFIG = Object.assign({
  WHATSAPP_NUMBER: "",
  EMAIL: "",
  ENABLE_LOCAL_STAFF_MARGIN: false
}, window.BDB_CONFIG || {});
