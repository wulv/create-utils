#!/usr/bin/env node

import commander from 'commander';
import chalk from 'chalk';
import create from './cli/create';

const packageJson = require('../package.json');


commander
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(create);