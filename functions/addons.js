const api = require("./api")

exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, "")
  const segments = path.split("/").filter(e => e)

  const cleanPath = path.replace(/^\/\//, "")
  if (cleanPath === "manifest") {
    return api.manifest(event, context)
  }

  if (cleanPath.match(/^instances/)) {
    switch (event.httpMethod) {
      case "GET":
        /* GET /.netlify/functions/instances/123456 */
        if (segments.length === 1) {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: "Missing addonInstance ID"
            })
          }
        } else if (segments.length === 2) {
          event.id = segments[2]
          return api.read(event, context)
        } else {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: "too many segments in GET request"
            })
          }
        }
      /* POST /.netlify/functions/api */
      case "POST":
        return api.create(event, context)
      /* PUT /.netlify/functions/instances/123456 */
      case "PUT":
        if (segments.length === 1) {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: "Missing addonInstance ID"
            })
          }
        } else if (segments.length === 2) {
          event.id = segments[2]
          return api.update(event, context)
        } else {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: "invalid segments in POST request"
            })
          }
        }
      /* DELETE /.netlify/functions/instances/123456 */
      case "DELETE":
        if (segments.length === 1) {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: "Missing addonInstance ID"
            })
          }
        } else if (segments.length === 2) {
          event.id = segments[2]
          return api.delete(event, context)
        } else {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: "invalid segments in DELETE request"
            })
          }
        }
      /* Fallthrough case */
      default:
        return {
          statusCode: 500,
          body: "unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE"
        }
    }
  }
}
