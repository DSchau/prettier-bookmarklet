const fs = require('mz/fs');
const path = require('path');

const dest = path.join(__dirname, '../dist');

fs.readFile(path.join(dest, 'prettier.js'), 'utf8')
  .then(contents => {
    const bookmarklet = `javascript:${contents}`;

    return fs.writeFile(path.join(dest, 'bookmarklet.js'), bookmarklet, 'utf8');
  });
