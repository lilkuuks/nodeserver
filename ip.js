// ipFetcher.js
const os = require('os');

function getLocalIP() {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName in networkInterfaces) {
    for (const interface of networkInterfaces[interfaceName]) {
      // Filter out internal (loopback) and IPv6 addresses
      if (interface.family === 'IPv4' && !interface.internal) {
        console.log("Local IP Address: " + interface.address);
        return interface.address;
      }
    }
  }
}

// Export the function
module.exports = getLocalIP;
