


module.exports = async (event, context) => {
  const id = event.id
  console.log(`Function 'read' invoked. Read id: ${id}`)

  // Fetch peristed data from database with `id`

  // Then return the data

  return {
    statusCode: 200,
    body: JSON.stringify({
      env: {
        'YOUR_SERVICE_API_SECRET': 'value'
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
