#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var commander_1 = tslib_1.__importDefault(require("commander"));
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var create_1 = tslib_1.__importDefault(require("./cli/create"));
var packageJson = require('../package.json');
commander_1.default
    .version(packageJson.version)
    .arguments('<project-directory>')
    .usage(chalk_1.default.green('<project-directory>') + " [options]")
    .action(create_1.default);
