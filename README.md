# Rebus-fr

Petite fonction JavaScript pour créer des rébus avec des emojis à partir de phrase en français.


## Exemple

`Mon chat a mangé un poisson` devient `Ⓜ️on 🐱 🅰️ Ⓜ️👼é 1️⃣ 🪴a🔊`

`L'imprimeur de paris vend son âme au démon` devient `l'1️⃣🅿🍚Ⓜ️🥚r 2️⃣ 👣🍚s 🍃d 🔊 âⓂ️e 💧 🎲Ⓜ️on`

`Antoine se rabote dans son lit joyeusement` devient `📅🫵🪢 se 🐀👢 🦷 🔊 🛏️ 😀🥚seⓂ️📅t`


## Utilisation

```js
const { createRebus } = require("rebus-fr");

var rebus = createRebus("Voici un rébus");

console.log(rebus);
```