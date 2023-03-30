var readline = require("readline").createInterface(process.stdin, process.stdout);

var Rebus = require("./rebus.js");

readline.on("line", line => {
    console.log(Rebus.createRebus(line));
});
