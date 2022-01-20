const fs = require('fs');

const getFiles = (path) => {
    const arr = [];
    fs.readdirSync(path).forEach(el => arr.push(el));
    return arr;
};

module.exports = getFiles;