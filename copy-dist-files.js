/* jshint esversion: 6 */

'use strict';

const fs = require('fs');
const path = require('path');
const resources = [
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.min.js',
  'styles.css'
];
resources.map(from => {
  const to = 'aot/' + path.basename(from);
  fs.createReadStream(from).pipe(fs.createWriteStream(to));
});
