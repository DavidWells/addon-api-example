const util = require('util')

module.exports = async (event, context) => {
  const body = JSON.parse(event.body)
  console.log('body', util.inspect(body, false, null))
  const addonConfiguration = config.config
  console.log('Create config values', userConfig)

  /* Do provisioning logic here */

  // provision XYZ

  // This response will set values back inside of the netlify account to the given site

  const addonInstanceId = uuid()
  console.log(`ID for subsequent Update/Get/Delete calls: ${addonInstanceId}`)

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
    response.message = 'Get off my lawn addon added to your site. Run `netlify open:site` to see in action'
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

// Generate unique ID
function uuid() {
  const lut = []
  for (let i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16)
  }
  return (function () {
    const d0 = Math.random() * 0xffffffff | 0
    const d1 = Math.random() * 0xffffffff | 0
    const d2 = Math.random() * 0xffffffff | 0
    const d3 = Math.random() * 0xffffffff | 0
    return `${lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff]}-${
      lut[d1 & 0xff]}${lut[d1 >> 8 & 0xff]}-${lut[d1 >> 16 & 0x0f | 0x40]}${lut[d1 >> 24 & 0xff]}-${
      lut[d2 & 0x3f | 0x80]}${lut[d2 >> 8 & 0xff]}-${lut[d2 >> 16 & 0xff]}${lut[d2 >> 24 & 0xff]
      }${lut[d3 & 0xff]}${lut[d3 >> 8 & 0xff]}${lut[d3 >> 16 & 0xff]}${lut[d3 >> 24 & 0xff]}`
  }())
}