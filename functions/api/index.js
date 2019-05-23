const Manifest = require('./manifest')
const Create = require('./create')
const Read = require('./read')
const Update = require('./update')
const Delete = require('./delete')

module.exports = {
  manifest: Manifest,
  create: Create,
  read: Read,
  update: Update,
  delete: Delete
}