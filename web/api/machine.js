const jaysonBrowserClient = require('jayson/lib/client/browser')

const callServer = function (request, callback) {
  const options = {
    method: 'POST',
    body: request,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('/jsonrpc', options)
    .then(function (res) {
      return res.text()
    })
    .then(function (text) {
      callback(null, text)
    })
    .catch(function (err) {
      callback(err)
    })
}

export const client = jaysonBrowserClient(callServer, {
  // other options go here
})
