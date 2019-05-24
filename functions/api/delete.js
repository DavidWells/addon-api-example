module.exports = async (event, context) => {
  const id = event.id
  console.log(`Function 'delete' invoked. delete id: ${id}`)

  /* Run any cleanup logic you have here */

  return {
    // response MUST be 204
    statusCode: 204,
    body: JSON.stringify({
      delete: true
    })
  }
}
