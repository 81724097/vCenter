import app from "./server"
import http from "http"


const server = http.createServer(app)
let currentApp = app
server.listen(3000)


if (module.hot) {
    module.hot.accept('./server', () => {
        server.removeListener('request', currentApp)
        server.on('request', app)
        currentApp = app
    })
}