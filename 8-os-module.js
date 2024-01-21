const { log } = require('console');
const os = require('os');
// const {} = require('os');

// info about current user
const user = os.userInfo();

console.log(user);

// method returns the system uptime in seconds 
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMEm: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);