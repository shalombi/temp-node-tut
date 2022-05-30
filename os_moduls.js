const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//upTime system
console.log(`upTime system  is ${os.uptime} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

cl
currentOS
