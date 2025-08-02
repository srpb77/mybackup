const os = require('os');

console.log(os.arch());
console.log("We are running on a " + os.platform() + " system");

const freeMemory = os.freemem() / 1024 / 1024;
console.log("Available free memory:", freeMemory.toFixed(2), "MB");

const cpuCores = os.cpus().length;
console.log("Number of CPU cores:", cpuCores);


console.log("os.freemem(): \n",os.freemem());  
console.log("os.homedir(): \n",os.homedir());  
console.log("os.hostname(): \n",os.hostname());  
console.log("os.endianness(): \n",os.endianness());  
console.log("os.loadavg(): \n",os.loadavg());  
console.log("os.platform(): \n",os.platform());  
console.log("os.release(): \n",os.release());  
console.log("os.tmpdir(): \n",os.tmpdir());  
console.log("os.totalmem(): \n",os.totalmem());  
console.log("os.type(): \n",os.type());  
console.log("os.uptime(): \n",os.uptime());  

