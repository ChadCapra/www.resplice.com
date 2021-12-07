import { WebSocketServer } from 'ws'

const PORT = 8080

const wss = new WebSocketServer({ port: PORT })

wss.on('connection', ws => {
  ws.on('message', data => {
    console.log('received: %s', data)
  })

  // setTimeout(() => {
  //   ws.close(1000, 'I killed you')
  // }, 2000)

  // ws.send('something')
})

console.log(`WS Server listening on port ${PORT}`)
