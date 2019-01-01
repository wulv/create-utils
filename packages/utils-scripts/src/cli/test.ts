const jest = require('jest');
const { jsWithTs: tsjPreset } = require('ts-jest/presets');


import base from '../config/base';
const jestConfig = require('../config/jest.config.js');


export default function() {
  let argv = process.argv.slice(2);
  // const preset = path.join(base.curCwd, 'node_modules/ts-jest/');
  argv.push(
    '--config',
    JSON.stringify({ ...jestConfig, rootDir: base.distCwd, transform: {
      ...tsjPreset.transform
    } })
  );
  jest.run(argv);
}