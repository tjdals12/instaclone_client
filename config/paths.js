require('dotenv').config();
const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);

const moduleFileExtensions = ['js', 'jsx', 'ts', 'tsx'];

module.exports.moduleFileExtensions = moduleFileExtensions;
