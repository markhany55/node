const os=require('os')

// Info about current user
const user=os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`the system uptime ${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    platform:os.platform(),
    arch:os.arch(),
}
console.log(currentOs)