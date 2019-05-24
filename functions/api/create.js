const uuid = require('../utils/uuid')

module.exports = async (event, context) => {
  const body = JSON.parse(event.body)

  const config = body.config
  const addonConfiguration = config.config
  console.log('addonConfiguration', addonConfiguration)

  const addonInstanceId = uuid()

  console.log(`ID for subsequent Update/Get/Delete calls: ${addonInstanceId}`)

  /*

    Do provisioning logic here

  */

  // provision XYZ

  const response = {
    id: addonInstanceId,
    // endpoint: `${API_URL}/${instanceId}`,
    config: addonConfiguration,
    env: {
      TEST_ENV_VARIABLE: 'value',
      MY_PROVIDER_SECRET: 'shhhhhh'
    }
  }

  if (addonConfiguration.MESSAGE) {
    response.message =
      'Get off my lawn addon added to your site. Run `netlify open:site` to see in action'
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
