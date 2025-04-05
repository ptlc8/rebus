# Rebus-fr

Petite fonction JavaScript pour créer des rébus avec des emojis à partir de phrase en français.

⚠️ Disclaimer : Ce n'est pas parfait, mais c'est marrant. Si tu veux l'améliorer, n'hésite pas à faire une [PR](https://github.com/ptlc8/rebus/pulls).


## ✨ Exemples

`Mon chat a mangé un poisson` devient `Ⓜ️on 🐱 🅰️ Ⓜ️👼é 1️⃣ 🪴a🔊`

`L'imprimeur de paris vend son âme au démon` devient `l'1️⃣🅿🍚Ⓜ️🥚r 2️⃣ 👣🍚s 🍃d 🔊 âⓂ️e 💧 🎲Ⓜ️on`

`Antoine se rabote dans son lit joyeusement` devient `📅🫵🪢 se 🐀👢 🦷 🔊 🛏️ 😀🥚seⓂ️📅t`


## 🛠️ Utilisation

```js
const { toRebus } = require("rebus-fr");

var rebus = toRebus("Voici un rébus");

console.log(rebus);
```


## 😕 Limites phonétiques

- Les /œ̃/ sont considérés comme des /ɛ̃/ parce que je n'arrive à faire la différence.

- Le /ø/ est approximatif parce que je n'arrive pas à le différencier de /ə/.

  Et parfois /ø/ est mis à la place de /œ/ parce que c'est dur à déterminer.

- Certains "o" sont retranscrit /ɔ/ au lieu de /o/ parce que c'est dur à déterminer aussi.

- Les "w" sont presque toujours prononcés /w/.