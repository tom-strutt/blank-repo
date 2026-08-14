// systemInfo.mjs
// Retrieves and prints Operating System information using the built-in
// `os` module, formatting memory values with the imported byteToSize helper.

import os from 'node:os';
import { bytesToSize } from './freeMemory.mjs';
// ...
console.log(`Total Memory:  ${bytesToSize(os.totalmem())}`);
console.log(`Free Memory:   ${bytesToSize(os.freemem())}`);

console.log('Operating System Information');
console.log('===========================');
console.log(`Type:          ${os.type()}`);          // e.g. Linux / Windows_NT / Darwin
console.log(`Platform:      ${os.platform()}`);      // e.g. linux / win32 / darwin
console.log(`Architecture:  ${os.arch()}`);          // e.g. x64 / arm64
console.log(`Release:       ${os.release()}`);       // kernel / OS version string
console.log(`Hostname:      ${os.hostname()}`);
console.log(`Home Dir:      ${os.homedir()}`);
console.log(`Total Memory:  ${bytesToSize(os.totalmem())}`);
console.log(`Free Memory:   ${bytesToSize(os.freemem())}`);
console.log(`CPU Cores:     ${os.cpus().length}`);
console.log(`Uptime:        ${(os.uptime() / 3600).toFixed(2)} hours`);
