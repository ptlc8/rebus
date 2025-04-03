const { createRebus } = require("./rebus.js");

function checkEquals(a, b) {
    if (a == b) {
        console.log(`✔️ ${a}`);
    } else {
        console.log(`✖️ "${a}" != "${b}"`);
        process.exit(1);
    }
}

checkEquals(createRebus("Mon chat a mangé un poisson"), "Ⓜ️on 🐱 🅰️ Ⓜ️👼é 1️⃣ 🪴🅰️🔊");
checkEquals(createRebus("L'imprimeur de paris vend son âme au démon"), "l'1️⃣🅿🍚Ⓜ️🥚r 2️⃣ 👣🍚s 🍃d 🔊 âⓂ️e 💧 🎲Ⓜ️on");
checkEquals(createRebus("Antoine se rabote dans son lit joyeusement"), "📅🫵🪢 se 🐀👢 🦷 🔊 🛏️ 😀🥚seⓂ️📅t");
