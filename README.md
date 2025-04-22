# Rebus-fr

Petite fonction JavaScript pour créer des **rébus** avec des **emojis** à partir de phrase en **français**.

(Peut aussi faire de la transcription **phonétique** et de la translittération **cyrillique**)

> ⚠️ Disclaimer : Ce n'est pas parfait, mais c'est fonctionnel.
> Si tu veux l'améliorer, n'hésite pas à faire une [PR](https://github.com/ptlc8/rebus/pulls).


## ✨ Exemples

`Mon chat a mangé un poisson` devient `🗻 🐱 🅰️ m👼é 1️⃣ 🫛🔊`

`L'arnaqueur de paris vend son âme au démon` devient `🥓n🅰️❤️ 2️⃣ 🍰i 🌬️ 🔊 🅰️m 💧 🎲🗻`

`Antoine se rabote dans son lit joyeusement` devient `📅🫵🪢 s🇪 🐀👢 🦷 🔊 🛏️ 😀👀z🇪🤥`


## 🛠️ Utilisation

### 🟢Avec Node.js

Installer le package avec cette commande :

```sh
npm i rebus-fr
```

Créer un rébus :

```js
import { toRebus } from "rebus-fr";

var rebus = toRebus("Voici un rébus");

console.log(rebus);
```


### 🌐Dans une page HTML 

Ajouter ce tag dans le code HTML :

```html
<script src="https://cdn.jsdelivr.net/npm/rebus-fr/dist/rebus.js"></script>
```

Puis dans le code JavaScript il est possible d'utiliser de faire :

```js
Rebus.toRebus("Voici un nouveau rébus");
```


### 🔊 Pour de la transcription phonétique

Avec Node.js :

```js
import { toPhonetic } from "rebus-fr";

var phonetic = toPhonetic("Voici une transcription phonétique");

console.log(phonetic);
```

Dans une page web :

```js
Rebus.toPhonetic("Transcrivons le web phonétiquement");
```


### 🧰 Autres fonctions

- `phoneticToRebus` : Transformation de la notation phonétique en rébus français
- `phoneticToCyrillic` : Tranlittération de la notation phonétique en lettres cyrilliques
- `toCyrillic` : Transcription du français en lettres cyrilliques


## 😕 Limites phonétiques

- Les /œ̃/ sont considérés comme des /ɛ̃/ parce que je n'arrive à faire la différence.

- Le /ø/ est approximatif parce que je n'arrive pas à le différencier de /ə/.

- Parfois /ø/ est mis à la place de /œ/ parce que c'est dur à déterminer.

- Certains "o" sont retranscrit /ɔ/ au lieu de /o/ (et inversement) parce que c'est dur à déterminer aussi.

- Les "w" sont presque toujours transcrits /w/.

- Les liaisons sont ignorées.
