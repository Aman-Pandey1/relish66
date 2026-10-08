const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../src/assets/newbanner1.jpeg');
const dest = path.join(__dirname, '../public/og-image.jpeg');

fs.copyFileSync(source, dest);
console.log('Copied og-image.jpeg to public/');
