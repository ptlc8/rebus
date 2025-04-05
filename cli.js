#!/usr/bin/env node

var readline = require("readline").createInterface(process.stdin, process.stdout);

var Rebus = require(".");

readline.on("line", line => {
    console.log(Rebus.toPhonetic(line));
    console.log(Rebus.toRebus(line));
});
