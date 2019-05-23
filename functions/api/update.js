
// Update the instance
module.exports = async (event, context) => {
  const addonInstanceId = event.id
  console.log(`Function 'update' invoked. update id: ${addonInstanceId}`)
  const body = JSON.parse(event.body)

  const addonConfiguration = body.config.config

  /* Fetch existing data */

  /* then update if needed */

  const response = {
    id: addonInstanceId,
    message: message,
    // endpoint: `${API_URL}/${instanceId}`,
    config: addonConfiguration,
    env: {
      'TEST_ENV_VARIABLE': 'value',
      'MY_PROVIDER_SECRET': 'shhhhhh',
    }
  }

  if (addonConfiguration.MESSAGE) {
    response.snippets = [
      {
        title: 'Snippet From Demo App',
        position: 'head',
        html: `<script>alert("${addonConfiguration.MESSAGE}")</script>`
      }
    ]
  }

  return {
    statusCode: 201,
    body: JSON.stringify(response)
  }
}