module.exports = async (event, context) => {
  const addonInstanceId = event.id
  console.log(`Read id: ${addonInstanceId}`)

  // Fetch peristed data from database with `id`

  // Then return the current config

  return {
    statusCode: 200,
    body: JSON.stringify({
      env: {
        YOUR_SERVICE_API_SECRET: 'value'
      },
      config: {
        MESSAGE: 'cool'
      },
      snippets: [
        {
          title: 'Snippet From Demo App',
          position: 'head',
          html: '<script>console.log("Hello from App")</script>'
        }
      ]
    })
  }
}
