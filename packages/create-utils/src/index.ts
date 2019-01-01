#!/usr/bin/env node

import commander from 'commander';
import chalk from 'chalk';
import packageJson from '../package.json';

let projectName;

commander
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name;
  })