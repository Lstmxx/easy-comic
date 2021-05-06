import app from './app'

import { systemConfig } from './config'

const server = app.listen(systemConfig.port, function() {
  console.log(`server is listening at port ${systemConfig.port}`)
})
console.log('yedfs h')

export default server