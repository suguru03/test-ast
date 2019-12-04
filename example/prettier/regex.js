'use strict';
const fs = require('fs');
const path = require('path');
const str = fs.readFileSync(path.resolve(__dirname, './test.js'), 'utf8');
console.log(str.replace(/var/g, 'const'));
console.log(str.replace(/var\s(.+?=)/g, 'const $1'));
