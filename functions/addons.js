const api = require('./api')

exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '')
  const segments = path.split('/').filter(e => e)
  const cleanPath = path.replace(/^\/\//, '')

  /* POST /.netlify/functions/manifest */
  if (cleanPath === 'manifest') {
    return api.manifest(event, context)
  }

  if (cleanPath.match(/^instances/)) {
    
    /* Create Addon - POST /.netlify/functions/instances */
    if (event.httpMethod === 'POST') {
      return api.create(event, context)
    }

    if (segments.length === 1) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Missing addon instance Id'
        })
      }
    }

    switch (event.httpMethod) {
      case 'GET':
        /* Get Addon Info - GET /.netlify/functions/instances/123456 */
        if (segments.length === 2) {
          event.id = segments[2]
          return api.read(event, context)
        } else {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: 'too many segments in GET request'
            })
          }
        }
      /* Update Addon config - PUT /.netlify/functions/instances/123456 */
      case 'PUT':
        if (segments.length === 2) {
          event.id = segments[2]
          return api.update(event, context)
        } else {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: 'invalid segments in POST request'
            })
          }
        }
      /* Delete Addon - DELETE /.netlify/functions/instances/123456 */
      case 'DELETE':
        if (segments.length === 2) {
          event.id = segments[2]
          return api.delete(event, context)
        } else {
          return {
            statusCode: 500,
            body: JSON.stringify({
              error: 'invalid segments in DELETE request'
            })
          }
        }
      /* Fallthrough case */
      default:
        return {
          statusCode: 500,
          body: JSON.stringify({
            error:
              'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE'
          })
        }
    }
  }
}
