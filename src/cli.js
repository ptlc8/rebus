#!/usr/bin/env node

import { createInterface } from "readline";

const readline = createInterface(process.stdin, process.stdout);

import * as Rebus from "./index.js";

readline.on("line", line => {
    console.log(Rebus.toPhonetic(line));
    console.log(Rebus.toRebus(line));
});
