'use strict';
const fs = require('fs');
const path = require('path');
const util = require('util');
const parser = require('@babel/parser');

const str = fs.readFileSync(path.resolve(__dirname, './test.js'), 'utf8');
console.log(util.inspect(parser.parse(str), false, null));
