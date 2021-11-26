import { WebSocketServer } from 'ws'

const PORT = 8080

const wss = new WebSocketServer({ port: PORT })

wss.on('connection', ws => {
  ws.on('message', data => {
    console.log('received: %s', data)
  })

  // ws.send('something')
})

console.log(`WS Server listening on port ${PORT}`)
