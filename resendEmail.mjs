#!/usr/bin/env node

import fs from '../../../lib/misclibs/fs.mjs';
import customMailer from './customemail.mjs';
import {emailFootnote} from './customemail.mjs'

function help() {
  console.log(`

USAGE: resendEmail failed-email-#####.json

`)
}

function rageQuit(msg, exitcode=1) {
  console.error(msg);
  process.exit(exitcode);
}

process.argv.shift();
process.argv.shift();

if (process.argv.length != 1) {
  help();
  rageQuit('Wrong number of arguments given.')
}

const failure=fs.loadjson(process.argv?.[0]);
if (!failure) rageQuit(`Unable to read json from ${process.argv?.[0]}.`)

let {to, from, subject, html} = failure;
if (!to || !from || !subject || !html) {
  rageQuit('Not all parameters found.')
}
if (html.includes(emailFootnote)) {
  html = html.replace(emailFootnote, '');
}

if (!(await customMailer(
  to, subject, html, from
))) rageQuit('sending failed');

process.exit(0);
