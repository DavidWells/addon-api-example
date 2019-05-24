

module.exports = async (event, context) => {
	// Return information about your addon
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Get off my lawn',
      description: 'This addon yells at visitors',
      // admin_url: 'https://admin.my-app.com',
      config: {
        'MESSAGE': {
          // An alternate, human-friendly name.
          'displayName': 'What do you want to yell?',
          // Type of field
          'type': 'string',
          // If is required or not
          'required': true,
        },
      },
    })
	}
}