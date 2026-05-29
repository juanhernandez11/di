const fs = require('fs');
const pdf = require('pdf-parse').default || require('pdf-parse');
const dataBuffer = fs.readFileSync('JUAN RAMON MORENO BRAVO.pdf');
pdf(dataBuffer).then(data => {
  fs.writeFileSync('extracted.txt', data.text, 'utf8');
  console.log('done');
}).catch(err => { console.error(err); process.exit(1); });
