# Rebus-fr

Petite fonction JavaScript pour créer des **rébus** avec des **emojis** à partir de phrase en **français**.

(Peut aussi faire de la transcription **phonétique**.)

> ⚠️ Disclaimer : Ce n'est pas parfait, mais c'est fonctionnel.
> Si tu veux l'améliorer, n'hésite pas à faire une [PR](https://github.com/ptlc8/rebus/pulls).


## ✨ Exemples

`Mon chat a mangé un poisson` devient `🗻 🐱 🅰️ m👼é 1️⃣ 🫛🔊`

`L'arnaqueur de paris vend son âme au démon` devient `🥓n🅰️❤️ 2️⃣ 🍰i 🌬️ 🔊 🅰️m 💧 🎲🗻`

`Antoine se rabote dans son lit joyeusement` devient `📅🫵🪢 s🇪 🐀👢 🦷 🔊 🛏️ 😀👀z🇪🤥`


## 🛠️ Utilisation

```js
const { toRebus } = require("rebus-fr");

var rebus = toRebus("Voici un rébus");

console.log(rebus);
```

### Ou pour de la transcription phonétique

```js
const { toPhonetic } = require("rebus-fr");

var phonetic = toPhonetic("Voici une transcription phonétique");

console.log(phonetic);
```


## 😕 Limites phonétiques

- Les /œ̃/ sont considérés comme des /ɛ̃/ parce que je n'arrive à faire la différence.

- Le /ø/ est approximatif parce que je n'arrive pas à le différencier de /ə/.

  Et parfois /ø/ est mis à la place de /œ/ parce que c'est dur à déterminer.

- Certains "o" sont retranscrit /ɔ/ au lieu de /o/ parce que c'est dur à déterminer aussi.

- Les "w" sont presque toujours prononcés /w/.